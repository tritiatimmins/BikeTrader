// modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
// var Post refers to mongoose model post.js
var Post = require('./app/models/post.js');

//middleware for images
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

// necessary for file uploading
// TODO: implement file uploading to use, install connect-multiparty
// var multipart = require('connect-multiparty');
// var multipartMiddleWare = multipart();

// configure and connect to database
var db = mongoose.connect('mongodb://tritiatimmins:Harley*8@ds019658.mlab.com:19658/biketrader');

var port = process.env.PORT || 8080;

app.enable('trust proxy');

// get all data of POST body
app.use(bodyParser.json());

// parse app/vnd as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse app/w-www
app.use(bodyParser.urlencoded({extended: true}));


// override with x-http-method 
app.use(methodOverride('X-HTTP-Method-Override'));


app.use(express.static(__dirname + '/public'));


// routes will go here*************************************************

// route for getting all bike listings
app.get('/api/feed', function(req, res, next) {
  Post.find(function(err, posts) {
    if (err) { return next (err); }
    // console.log('posts', posts);
    res.json(posts);
  });
});


// route for creating a new bike listing in mongo database

app.post('/api/post', function(req, res, next) {

  var newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    color: req.body.color,
    price: req.body.price,
    picFile: req.body.picFile,
    email: req.body.email,
    dateCreated: req.body.dateCreated
  });
 
  newPost.save(function(err, newPost) {
    if (err) { return next(err); }
    res.json(req.body);
  });

});


// uncomment after upload is defined
// app.post('/upload', multipartMiddleware,upload);

// start app
app.listen(port);

// shout out to the user
console.log('Listening on port:', port);

module.exports = app;