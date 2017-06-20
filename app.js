var express = require('express');
var app = express();
var path = require('path');

app.set('port' , 3000);

app.get('/', function(req, res){
  console.log("get the homepage");
  res
  .status(200)
  .sendfile(path.join(__dirname,'public','index.html'));
});
app.get('/json', function(req, res){
  console.log("get the json");
  res
  .status(200)
  .json( {"json data" : true});
});
app.get('/file', function(req, res){
  console.log("get the file");
  res
  .status(200)
  .sendfile(path.join(__dirname, "app.js"));
});

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
console.log("magic happens on port " + port);
});
