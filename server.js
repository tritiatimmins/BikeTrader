// modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
var mongoose = require('mongoose');

//middleware for images
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


// configure and connect to database
var db = mongoose.connect('mongodb://tritiatimmins:Harley*8@ds019638.mlab.com:19638/tritiadb');

var port = process.env.PORT || 8080;

// get all data of POST body
app.use(bodyParser.json());

// parse app/vnd as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse app/w-www
app.use(bodyParser.urlencoded({extended: true}));


// override with x-http-method ect
// app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

// routes will go here*************************************************
// set up routes and require here

// require('./components/routes.js')(app);

// TODO: What is wrong with the line below?
require('./app/routes.js')(app);

// uncomment after upload is defined
// app.post('/upload', multipartMiddleware,upload);

// start app
app.listen(port);

// shout out to the user
console.log('Listening on port:', port);

module.exports = app;