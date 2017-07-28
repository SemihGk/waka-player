'use strict';

const express = require('express'),
  app = express(),
  http = require('http').Server(app),
  path = require('path'),
  bodyParser = require('body-parser');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/production/index.html'));
});

app.use(express.static(__dirname + '/dist/production'));
app.use(express.static(__dirname + '/node_modules/shaka-player'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
  console.log("Great! App is ready and running on localhost:" + 3000);
});
