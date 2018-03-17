var express = require('express');
var logger = require('./config/logger');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app_routes = require('./config/routes');
var counter = require('./lib/requestCounter');

var app = express();
global.requestNumer = 0;
app.set('port', (process.env.PORT || 3000));
app.use(bodyParser());
app.use(counter());
app_routes.add_to_app(app);  // routes are defined in seperate files

// mongodb connection settings
// this strings with password can be moved to config file
mongoose.connect('mongodb://dev:deva@ds047935.mlab.com:47935/program', {useMongoClient: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  logger.info("Connected to database");
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});