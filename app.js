const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // parses our data from form automatically, so in next middlewares we can read req.body.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); // '/admin' will make it so all routes in 'adminRoutes' will automatically match only '/admin/...'
// ---------------  the '...' part matches the routes written in admin.js (.../add-product)'

app.use(shopRoutes);

app.use('/', (req, res, next) => {
  // used to catch any requests that didn't match all previouse possible routes
  res.status(404).sendFile(path.join(__dirname, 'views', 'ForOFor.html'));
});

app.listen(3000);
