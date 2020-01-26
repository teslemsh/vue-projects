<template>
  <div id="secure">
   <tpl-header></tpl-header>
   <!-- <router-view/>-->

    Hollas
  </div>
</template>

<script>
import TplHeader from "../components/Header.vue";
/*import TplSideBar from "../components/SideBar.vue";
import slideMenuItems from "../lib/slideMenuItems.js";
import auth from "../auth/index";
import router from "../router";*/

export default {
  name: "Secure",
  components: {
    "tpl-header": TplHeader,
    //"tpl-side-bar": TplSideBar
  },
  /*beforeRouteEnter(to, from, next) {
    if (auth.user.authenticated == false) {
      router.push("login");
    } else {
      next();
    }
  }*/
};
</script>