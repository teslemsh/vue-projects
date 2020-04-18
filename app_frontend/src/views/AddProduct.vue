<template>
  <div>
    <header-component />
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row>
          <v-col>
            <h1>AddProduct Page</h1>
            <form @submit="formSubmit">
              <strong>Name:</strong>
              <input type="text" class="form-control" v-model="name" />
              <strong>Precio:</strong>
              <input class="form-control" v-model="price" />
              <strong>Cantidad:</strong>
              <input class="form-control" v-model="amound" />
              <button class="btn btn-success">Submit</button>
            </form>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <footer-component />
  </div>
</template>

<script>
import headerComponent from "../components/Header.vue";
import footerComponent from "../components/Footer.vue";
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: "addProduct",
  components: {
      headerComponent,
      footerComponent
  },
  data : () => ({
    name: '',
    price: '',
    amound: '',
    ids: Number
  }),
  computed: {
    ...mapState({
      count() {
        this.ids = $item.length;
        console.log(this.ids)
        return this.ids
      }
    }),
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.axios.post('http://localhost:5000/api/v1/products', {
        id : this.ids,
        name: this.name,
        price: this.price,
        amound : this.amound
      })
    }
  }
}
</script>

<style scoped>

h1{ margin-bottom: 2em;}

input{border-bottom: 1px solid #000000;}

</style>