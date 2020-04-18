<template>
  <v-app id="inspire">
    <header-component />
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <ProductList/>
            <ShoppingCart/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <footer-component />
  </v-app>
</template>

<script>
	import headerComponent from "../components/Header.vue";
	import ProductList from '../components/ProductList'
    import ShoppingCart from '../components/ShoppingCart'
	import footerComponent from "../components/Footer.vue";

	export default {
		name: "Secure",
		props : {
			source : String ,
		} ,
    components: {
        headerComponent,
        ProductList,
        ShoppingCart,
        footerComponent
    },
		data : () => ({
			drawer : null ,
		})
	}
</script>