var express = require('express');
var _ = require('lodash');
var cors = require('express-cors');

var app = express();

app.use(cors({
  allowedOrigins: [
    'http://localhost:*', 'https://localhost*  '
  ]
}));

app.get('/', function(req, res) {

  var temperature1 = _.random(120, 200);
  var temperature2 = _.random(120, 200);
  var temperature3 = _.random(120, 200);
  var uvList       = _.random(200, 300);

  var jsonObj = {
    "Temperature1": temperature1,
    "Temperature2": temperature2,
    "Temperature3": temperature3,
    "uvList": uvList
  };

  res.send(jsonObj);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);
});
