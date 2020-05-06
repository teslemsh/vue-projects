import axios from 'axios';

export default {
  getProducts () {
		return axios.get('http://localhost:5000/api/v1/products')
			.then(response => response.data) //only one line
			.then(data => data.products)
  },
  
  updateProduct(id) {
    return axios.put('http://localhost:5000/api/v1/Products/'+ id)
    .then(response => response.data) //only one line
    .then(data => data.products)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
