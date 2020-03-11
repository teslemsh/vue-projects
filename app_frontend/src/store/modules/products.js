import shop from "@/api/shop";
import axios from 'axios'

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    availableProducts (state, getters) {
      return state.items.filter(product => product.inventory > 0)
    },

    productIsInStock () {
      return (product) => {
        return product.inventory > 0
      }
    }
  },

  mutations: {
    setProducts (state, products) {
      // update products
      state.items = products
    },

    decrementProductInventory (state, product) {
      product.inventory--
    }
  },

  actions: {
    fetchProducts({commit}) {
      axios.get('http://localhost:5000/api/v1/products')
      .then(patata => commit('setProducts', patata.data.products))
    }
  }
}
