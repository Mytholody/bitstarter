var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// Reads index.html and allows printout from var printbuff
var readin = fs.readFileSync('index.html','utf-8');
var buffer = new Buffer(27);
buffer.write(readin);
var printbuff = buffer.toString('utf-8');


app.get('/', function(request, response) {
  response.send(printbuff);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
