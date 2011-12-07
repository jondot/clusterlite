var http = require('http');
var clusterlite = require('../../');

clusterlite.workers = 2;
clusterlite(function(){
  console.log("worker running");
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }).listen(4000);
});

