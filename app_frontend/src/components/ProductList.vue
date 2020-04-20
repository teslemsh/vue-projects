<template>
    <div>
      <h1>Product List</h1>
      <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif"
      >
      <ul v-else>
        <li v-for="(product, index) in products" :key="index" >
          <span>{{product.title}} - {{product.price}}€ - {{product.inventory}} Unidades</span>
          <div>
            <button
              :disabled="!productIsInStock(product)"
              @click="addProductToCart(product)"
            >Add to cart</button>
            <p class="edit" @click="editFunction(product.id)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>          
            </p>
          </div>
        </li>
      </ul>
      <div v-if='editContainer'>
        <form @submit="formSubmit(id)">
          <div class="inputsWrapper">
            <strong>Nombre:</strong>
            <input type="text" class="form-control" v-model="editName" />
            <strong>Precio:</strong>
            <input class="form-control" v-model="editPrice" />
            <strong>Cantidad:</strong>
            <input class="form-control" v-model="editAmound" />
          </div>
          <div class="buttonWrappe">
            <button class="btn btn-success">Submit</button>
            <button class="btn btn-alert" @click="clearAll">Clear</button>
          </div>

        </form>
      </div>
    </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import axios from "axios"
  export default {
    data: () => ({
        loading: false,
        productIndex: 1,
        editContainer: false,
        id: "",
        editName: "",
        editPrice: "",
        editAmound: "",
        
    }),

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
        addProductToCart: 'cart/addProductToCart'
      }),

      clearAll (e) {
        e.preventDefault();
        this.editContainer = !this.editContainer
        this.editName = ""
        this.editPrice = ""
        this.editAmound = ""
      },

      editFunction: function (e) {
        this.editContainer = !this.editContainer
        this.id = e
        this.editName = this.products[e-1].title
        this.editPrice = this.products[e-1].price
        this.editAmound = this.products[e-1].inventory
      },
      formSubmit(e) {
        console.log(this.id) 
        console.log(this.editName) 
        console.log(this.editPrice) 
        console.log(this.editAmound) 
        console.log('http://localhost:5000/api/v1/products/' + this.id)
        e.preventDefault;
        axios.put('http://localhost:5000/api/v1/Products/' + this.id, {
          id: this.id, title: this.editName, price: this.editPrice, inventory: this.editAmound
        })
        .then(res => {
          console.log('done')
        })
      }
    },

    created () {
      this.loading = true
      this.fetchProducts()
        .then(() => this.loading = false)
    }
  }
</script>

<style scoped>

ul{
  max-width: 60%;
  margin: 0 auto;
  list-style: none;
}
li{
  margin-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
}

button{
  padding: .5em;
  background-color: #00BCD4;
  border-radius: 5px;
  color: #ffffff;
  margin-left: 1em;
}
.edit{
  display: inline-block;
  margin-left: .5em;
  cursor: pointer;
}
input {
  border-bottom: 1px solid #7e7b7b;
  margin-right: 1em;
}

.inputsWrapper{
  margin: 1em auto;
}

.inputsWrapper input{
  text-align: center;
}

.inputsWrapper input:not(:nth-child(2)){
  max-width: 100px;
}

.buttonWrapper{
  margin-top: 1em;
}
</style>
