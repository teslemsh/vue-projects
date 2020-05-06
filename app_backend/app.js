
import express from 'express';
import bodyParser from 'body-parser';

const admin = require('firebase-admin');
const serviceAccount = require('./firestore/key.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();


// Set up the express app
const app = express();

//Corcs 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// get all products
app.get('/api/v1/products', (req, res) => {
  let cityRef = db.collection('products').doc('products');
  cityRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
        return res.status(200).send({
          success: 'true',
          message: 'no products where found',
          products: []
        })
      } else {
        console.log('Document data:', doc.data());
        return res.status(200).send({
          success: 'true',
          message: 'products retrieved successfully',
          products: [doc.data()]
        })
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  
});



app.post('/api/v1/products', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }
 const product = {
   id: db.length + 1,
   title: req.body.title,
   description: req.body.description
 }
 db.push(product);
 return res.status(201).send({
   success: 'true',
   message: 'product added successfully',
   product
 })
});

app.get('/api/v1/products/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.map((product) => {
    if (product.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'product retrieved successfully',
        product,
      });
    }
});
 return res.status(404).send({
   success: 'false',
   message: 'product does not exist',
  });
});

app.delete('/api/v1/products/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  db.map((product, index) => {
    if (product.id === id) {
       db.splice(index, 1);
       return res.status(200).send({
         success: 'true',
         message: 'product deleted successfuly',
       });
    }
  });
    return res.status(404).send({
      success: 'false',
      message: 'product not found',
    });
});

app.put('/api/v1/Products/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  let products = db.collection('products').doc('products');
  products.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
        return res.status(404).send({
          success: 'false',
          message: 'Product not found',
        });
      } else {
        console.log('Document data:', doc.data());
        products.update({ id: id })


        return res.status(201).send({
          success: 'true',
          message: 'product updated successfully',
          products: [doc.data()]
        })
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  

  /*if (!ProductFound) {
    return res.status(404).send({
      success: 'false',
      message: 'Product not found',
    });
  }

  if (!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required',
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required',
    });
  }

  const updatedProduct = {
    id: ProductFound.id,
    title: req.body.title || ProductFound.title,
    description: req.body.description || ProductFound.description,
  };

  db.splice(itemIndex, 1, updatedProduct);

  return res.status(201).send({
    success: 'true',
    message: 'Product added successfully',
    updatedProduct,
  });*/
});

const PORT = 5000;

//app.listen creates a web server for us, it takes two parameters,
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});