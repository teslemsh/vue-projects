<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";

//import TplFooter from "./components/Footer.vue";

Vue.use(Vuex);

export const store = new Vuex.Store();

export default {
  name: "App",
  components: {
    //"tpl-footer": TplFooter
  },
  data: () => ({
    //
  })
};
</script>
