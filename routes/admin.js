const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  // we can use same 'add-product' route because we are using different methods get and post.
  //   console.log(
  //     'this middleware applies to only "/add-products", so we do not need to call next to go to the "/"'
  //   );

  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    title: 'Add Product BOSH ejs',
    path: '/admin/add-product',
    formCss:true,
    prodCss:true,
    activeProduct:true,
  });
});

router.post('/add-product', (req, res, next) => {
  // app.post makes this route '/product' only available for "POST" request
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports = {
  router,
  products,
};
