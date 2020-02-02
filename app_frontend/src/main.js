import './lib/css'
import './lib/script'

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import auth from './auth/index'
import vuetify from './plugins/vuetify';
import store from '@/store/index'

// Check the users auth status when the app starts
auth.checkAuth();

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  vuetify,
  store,
  components: {
    App
  }
});
