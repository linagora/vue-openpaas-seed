<template>
  <v-menu bottom left offset-y>
    <op-avatar slot="activator"></op-avatar>
    <v-list>
      <v-list-tile>
        <v-list-tile-content>
        <v-list-tile-title class="title">{{getDisplayName}}</v-list-tile-title>
        <v-list-tile-sub-title>{{getEmail}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>
      <v-list-tile @click.prevent="profile">
        <v-list-tile-title>{{$t('Profile')}}</v-list-tile-title>
      </v-list-tile>
      <v-divider/>
      <v-list-tile @click.prevent="settings">
        <v-list-tile-title>{{$t('Settings')}}</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click.prevent="logout">
        <v-list-tile-title>{{$t('Logout')}}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex";
import { OPAvatar } from "vue-openpaas-components";

export default {
  name: "op-user-menu",
  components: { "op-avatar": OPAvatar },
  methods: {
    logout() {
      return this.$store.dispatch("session/logout").catch(err => console.log("Error while logout", err));
    },

    profile() {},

    settings() {}
  },
  computed: {
    ...mapGetters({
      getAvatarUrl: "user/getAvatarUrl",
      getDisplayName: "user/getDisplayName",
      getEmail: "user/getEmail"
    })
  }
};
</script>

<style lang="stylus" scoped>
</style>
