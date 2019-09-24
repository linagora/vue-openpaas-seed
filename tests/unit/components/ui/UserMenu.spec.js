import { createLocalVue } from "%utils";
import { shallowMount } from "@vue/test-utils";

import i18n from "@/i18n";
import store from "@/store";
import router from "@/router";
import UserMenu from "@/components/ui/UserMenu";

describe.skip("The UserMenu component", () => {
  let mockLocalVue;

  beforeEach(async () => {
    mockLocalVue = await createLocalVue();
    jest.doMock("vue", () => ({ default: mockLocalVue }));
  });

  test("logout", async function() {
    jest.spyOn(store, "dispatch");

    const target = shallowMount(UserMenu, {
      localVue: mockLocalVue,
      store,
      router,
      i18n: i18n(mockLocalVue)
    });

    await target.vm.logout();

    expect(store.dispatch).toHaveBeenCalledWith("session/logout");
  });
});
