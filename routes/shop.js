const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminDataProducts = require('./admin').products;

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', {
    prods: adminDataProducts,
    title: 'Vlad Shop ejs',
    path: '/shop',
    prodAdded: !!adminDataProducts.length,
    prodCss:true,
    activeShop:true,
  });
});

module.exports = router;
