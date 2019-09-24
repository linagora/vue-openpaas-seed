import { createLocalVue as vueTestUtilsCreateLocalVue } from "@vue/test-utils";
import { applicationInit } from "@/application-init";

async function createLocalVue(config = {}) {
  return await applicationInit(vueTestUtilsCreateLocalVue(), config);
}

export { createLocalVue };
