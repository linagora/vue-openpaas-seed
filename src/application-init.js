import VueAxios from "vue-axios";
import OpenPaaS from "vue-openpaas-components";
import Vuetify from "vuetify";
import PortalVue from "portal-vue";
import colors from "vuetify/es5/util/colors";

import App from "@/App";
import router from "@/router";
import { Api, auth as servicesAuth } from "@/services";
import { theme as appTheme } from "@/style";
import ApplicationSettings from "@/services/application-settings";
import store from "@/store";
import i18n from "@/i18n";

const defaultTheme = {
  primary: colors.blue
};

// This prevents polluting the global Axios and Vue instances
// See for instance : https://github.com/vuetifyjs/vuetify/issues/4068#issuecomment-446988490
async function applicationInit(VueInstance, { auth = servicesAuth, theme = appTheme.colors } = {}) {
  const api = new Api({
    baseURL: store.state.applicationConfiguration.baseUrl
  });

  VueInstance.use(OpenPaaS, { api });

  VueInstance.use(VueAxios, api.client);

  VueInstance.use(PortalVue);

  VueInstance.router = router;

  VueInstance.use(Vuetify, {
    theme,
    options: {
      customProperties: true
    }
  });

  await auth.init(VueInstance);

  VueInstance.config.productionTip = false;

  return VueInstance;
}

function getApplication(VueInstance) {
  const Application = new VueInstance({
    router,
    store,
    i18n: i18n(VueInstance),
    render: h => h(App)
  }).$mount("#app");

  Application.ApplicationSettings = ApplicationSettings;

  return Application;
}

export { ApplicationSettings, applicationInit, defaultTheme, getApplication };
