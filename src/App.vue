<template>
  <v-app id="openpaas">
    <div v-if="$auth.ready()"
      :style="{ backgroundColor: backgroundColor, height: !$auth.check() ? '100vh': '' }"
      id="app-ready"
    >
      <v-navigation-drawer v-model="drawer" fixed clipped hide-overlay app v-if="$auth.check()">
        <!--<op-sidebar/>-->
      </v-navigation-drawer>
      <v-toolbar clipped-left app fixed color="blue" dark v-if="$auth.check()">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title style="max-width: 300px" class="ml-0 pl-3 hidden-sm-and-down">
          <img class="hidden-sm-and-down" id="header-logo" src="@/assets/logo.svg"/>
        </v-toolbar-title>
        <div id="search">
          <op-search-header/>
        </div>
        <!--<op-applications-menu/>-->
        <op-user-menu/>
        <template v-slot:extension v-if="showToolbarExtension">
          <portal-target name="toolbar-extension"></portal-target>
        </template>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <router-view/>
          </v-layout>
        </v-container>
      </v-content>
    </div>
    <div v-else>
      <v-progress-circular indeterminate :size="50" color="primary"></v-progress-circular>
    </div>
    <op-snackbar/>
  </v-app>
</template>

<script>
import { theme } from "@/style";
import SearchHeader from "@/components/ui/SearchHeader.vue";
import UserMenu from "@/components/ui/UserMenu.vue";
import Snackbar from "@/components/ui/Snackbar.vue";

export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    backgroundColor() {
      if (!this.$auth.check()) {
        return theme.colors.blue.base;
      }
    },
    showToolbarExtension() {
      // dirty hack to avoid to empty a portal-target with empty element
      // which displays the toolbar extension slot without content
      return this.$route.meta && this.$route.meta.showToolbarExtension;
    }
  },
  components: {
    "op-user-menu": UserMenu,
    "op-snackbar": Snackbar,
    "op-search-header": SearchHeader
  },
  created() {
    this.$auth.ready(() => {
      this.$store.dispatch("user/fetchUser");
    });
  }
};
</script>

<style lang="stylus">
  #header-logo
    height: 35px;
    width: 150px;

  #search
    display: flex
    flex-grow: 1
    justify-content: center
</style>
