var fs = require('fs');
var express = require('express');
//var app = express.createServer(express.logger());
//app.use(express.logger());

var app = express();
var buf=fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port + "  http://ec2-54-213-137-170.us-west-2.compute.amazonaws.com:8080");
});
