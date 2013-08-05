var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());
var buf=fs.readFileSync("index.html");

//console.log(buf);
//console.log(buf.toString());

app.get('/', function(request, response) {
  response.send('Hello World Too!');
});
//app.get('/', function(request, response) {
  //response.send(buf.toString())
//});

var port = process.env.PORT || 5000;

app.listen(port, function() {
     console.log("Listening on " + port);
});
