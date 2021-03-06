var express = require('express');
var _ = require('lodash');
var cors = require('express-cors');

var app = express();

var settings = {
  'temperature1': 180,
  'temperature2': 180,
  'displayInput': "hello world",
  'Power': false,
  'Fan': true,
  'List': {
    options: ['Left', 'Right', 'Up', 'Down'],
    selectedValue: 'Up'
  },
  'Another List': {
    options: ['1', '2', '3', '4'],
    selectedValue: '2'
  }
};

app.use(cors({
  allowedOrigins: [
    'http://localhost:*', 'https://localhost*'
  ]
}));

app.get('/', function(req, res) {

  var temperature1 = _.random(120, 200);
  var temperature2 = _.random(120, 200);
  var temperature3 = _.random(120, 200);
  var uvList       = _.random(200, 300);

  var jsonObj = {
    'Temperature1': temperature1,
    'Temperature2': temperature2,
    'Temperature3': temperature3,
    'uvList': uvList
  };

  //this is a test commment
  res.send(jsonObj);
});

app.get('/settings', function(req, res) {

  res.send(settings);

});

app.post('/settings', function(req, res) {
  res.send(200);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);
});
