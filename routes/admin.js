const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // we can use same 'add-product' route because we are using different methods get and post.
  //   console.log(
  //     'this middleware applies to only "/add-products", so we do not need to call next to go to the "/"'
  //   );
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  // app.post makes this route '/product' only available for "POST" request
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
