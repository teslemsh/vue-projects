<template>
  <div id="secure">
   <!-- <tpl-header></tpl-header>-->
    <section class="container mt-20">
<ProductList/>
      <ShoppingCart/>
    </section>
       
  </div>
</template>

<script>
import TplHeader from "../components/Header.vue";
import ProductList from '../components/ProductList'
import ShoppingCart from '../components/ShoppingCart'


export default {
  name: "Secure",
  components: {
    "tpl-header": TplHeader,
    ProductList,
    ShoppingCart
  },
  //data: {
  data() {
    return {
      apiUrl: "http://api.giphy.com/v1/gifs",
      apiKey: "noDKsjINdFxvmQXKyw4JZu7oiAraEXuu",
      gifs: null
    };
  }
};
</script>