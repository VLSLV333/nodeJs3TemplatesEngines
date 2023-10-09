const path = require('path');

module.exports = path.dirname(require.main.filename); // this gets the name of root file which is booted by npm start (here it is app.js)
