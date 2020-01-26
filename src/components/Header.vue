<template>
  <div>
    <v-app-bar app clipped-right light absolute>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#e05206"></v-app-bar-nav-icon>

      <v-toolbar-title style="{background: #e05206}">
        <v-img size="20" height="60" width="60" src="https://logos-blueland.s3-eu-west-1.amazonaws.com/blueland+logo.png"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-app-bar>
    <!--<tpl-side-bar :drawer="drawer"></tpl-side-bar>-->
  </div>
</template>
<script>
//import Drawer from "./SideBar";

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: true
  }),
  components: {
    //"tpl-side-bar": Drawer
  }
};
</script>

<style lang="css">
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 20px !important;
}
.v-list-item--dense,
.v-list--dense .v-list-item {
  min-height: 40px;
  width: 205px !important;
}
.theme--light.v-sheet {
  background-color: #ffffff;
  border-color: #ffffff;
  color: #2f4050;
}
::selection {
  background-color: #b3d4fc;
  color: #2f4050;
  text-shadow: none;
}
</style>


