<template>
    <div>
      <h1>Product List</h1>
      <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif"
      >
      <ul v-else>
        <li v-for="product in products">
          {{product.title}} - {{product.price}} - {{product.inventory}}
          <button
            :disabled="!productIsInStock(product)"
            @click="addProductToCart(product)"
          >Add to cart</button>

          <button
          color="red"
            @click="updateProduct(6)"
          >Edit Produt</button>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        loading: false,
        productIndex: 1
      }
    },

    computed: {
      ...mapState({
        products: state => state.products.items
      }),

      ...mapGetters('products', {
        productIsInStock: 'productIsInStock'
      })
    },

    methods: {
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
        updateProduct: 'products/updateProduct',
        addProductToCart: 'cart/addProductToCart'
      })
    },

    created () {
      this.loading = true
      this.fetchProducts().then(() => this.loading = false)
    }
  }
</script>

<style scoped>

</style>
