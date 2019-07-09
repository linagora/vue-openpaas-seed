import ApplicationSettings from "@/services/application-settings";

const state = {
  baseUrl: ApplicationSettings.VUE_APP_OPENPAAS_URL
};

const getters = {
  getSearchUrl(state) {
    // TODO: must be configurable from API configuration endpoint
    return new URL("/#/search/?q=", state.baseUrl).toString();
  }
};

export default {
  namespaced: true,
  state,
  getters
};
