const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<h1>NODE JS IS SO COOL! Form for you=)</h1>');
    res.write(
      '<form action="/message" method="POST"><input type="text" name="userSad"/><button type="submit">Send</button></form>'
    );
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const requestBody = [];
    req.on('data', (chunkOfData) => {
      //  ------------ alows us to listen to certain events on requests.
      requestBody.push(chunkOfData);
    });
    return req.on('end', () => {
      // ---------------  fired wnen server is done parsing incoming data
      const parsedBody = Buffer.concat(requestBody).toString();
      const userMessage = parsedBody.split('=')[1];
      fs.writeFile('formData.txt', userMessage, (error) => {
        // console.log(error) -----  we will automatically receive error in case writeFile fails
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      });
    });
    // res.statusCode = 302;        !!!!!!!!!! -------- this part of code will execute syncronosly, so if response depends on logic written before
    // res.setHeader('Location', '/');     !!!!!!!  -------------  we need to move it in callback function
    // return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>');
  res.write('<head><title>Enter message</title></head>');
  res.write('<h1>NODE JS IS COOL. No form=)!</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
  //   process.exit()      --------  forces our server to shut down. Othervice server is constantly listening and event loop keepOnGoing.
  //                             ------- in order to keep up with all incoming requests.
};

// module.exports = requestHandler;
module.exports = {
    requestHandler,
    someText: 'just to show several exports'
};

// another way of exporting

// module.exports.handler = requestHandler
// module.exports.someText = 'just to show several exports'