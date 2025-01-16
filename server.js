const http = require('http');

const server = http.createServer((req, res) => {
  // Without this check, the server will crash when the client closes the connection prematurely.
  // if (req.socket.destroyed) {
  //   return;
  // }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request

');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});