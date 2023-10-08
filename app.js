const http = require('http');

// function requestListener (request, response){

// }

// http.createServer(requestListener)

// http.createServer(function (request,response){

// })

const server = http.createServer((req, res) => {
  console.log(req);
});

// server.listen(3000)
