const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This runs always!');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log(
    'this middleware applies to only "/add-products", so we do not need to call next to go to the "/"'
  );
  res.send('<h1>I love NODE JS and adding products=)</h1>');
});

app.use('/', (req, res, next) => {
  console.log(
    'this middleware applies to all routes, because they all start with "/". So we place it in the end, so all other paths are checked first'
  );
  console.log('this only runs if we are not visiting paths written above');
  res.send('<h1>I love NODE JS</h1>');
});

app.listen(3000);
