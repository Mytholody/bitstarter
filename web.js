var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// Reads index.html and outputs as a buffer
var readin = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(readin.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
