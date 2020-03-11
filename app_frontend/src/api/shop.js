import axios from 'axios';
export default {
  getProducts (cb) {
    axios.get('http://localhost:5000/api/v1/products')
      .then(response => (this.info = response))
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
