var express = require('express');
var app = express();
var fs = require("fs");

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("REST-EndPoint - http://%s:%s", host, port)
 })

app.get('/GetUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})