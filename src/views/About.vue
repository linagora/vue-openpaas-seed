<template>
  <div class="about">
    <h1>{{$t('This is an about page')}}</h1>
    <portal to="toolbar-extension">
      <v-spacer></v-spacer>
      <v-btn icon @click="close">
        <v-icon>close</v-icon>
      </v-btn>
    </portal>
  </div>
</template>

<script>
import { routeNames } from "@/router";

export default {
  methods: {
    close() {
      this.$router.push({ name: routeNames.HOME });
    }
  }
};
</script>
