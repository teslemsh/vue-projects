import shop from "@/api/shop";

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
	
	/**
	 * Actions are called by the component, their main function is to call an a mutation to
	 * update the store data.
	 */
  actions: {
    fetchProducts({commit}) {
	    /**
	     * This method calls to the api and retrieve the products as promise.
	     * With then clause we get the data an call the mutation to update
	     * the products on the store-
	     */
      shop.getProducts()
	      .then(response => {
	      	console.log(response);
		      return response
	      })
	      .then(products => {commit('setProducts', products)})
    },
    updateProduct({commit}, id) {
      //call al api
      shop.updateProduct(id)
	      .then(response => {
	      	console.log(response);
		      return response
        })
        
	      //.then(products => {commit('setProducts', products)})

    }
  }
}
