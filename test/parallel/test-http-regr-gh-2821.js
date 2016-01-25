'use strict';
const common = require('../common');
const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end();

  server.close();
});

server.listen(common.PORT, function() {

  const req = http.request({
    method: 'POST',
    port: common.PORT
  });

  const payload = Buffer.allocUnsafe(16390);
  payload.fill('Й');
  req.write(payload);
  req.end();
});
