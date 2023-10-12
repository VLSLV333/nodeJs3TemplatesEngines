const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin').router;
const shopRoutes = require('./routes/shop');

// const { engine } = require('express-handlebars');

const app = express();

//  ================  connect and use PUG template engine
// app.set('view engine', 'pug'); // we are telling that we want to generate dynamic tamplates using pug engine

//  ================  connect and use express-handlebars template engine
// app.engine(
//   'hbs',
//   engine({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     layoutsDir: 'views/layouts/',
//   })
// );
// app.set('view engine', 'hbs'); // we are telling that we want to generate dynamic tamplates using pug engine

app.set('view engine', 'ejs');
app.set('views', 'views'); //  we are setting were to find our views (default is views folder)

app.use(bodyParser.urlencoded({ extended: false })); // parses our data from form automatically, so in next middlewares we can read req.body.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); // '/admin' will make it so all routes in 'adminRoutes' will automatically match only '/admin/...'
// ---------------  the '...' part matches the routes written in admin.js (.../add-product)'

app.use(shopRoutes);

app.use('/', (req, res, next) => {
  // used to catch any requests that didn't match all previouse possible routes
  res.status(404).render('404', { title: 'Wrong Page BOSH ejs', path: '404' });
});

app.listen(3000);
