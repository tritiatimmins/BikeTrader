// modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Post = require('./app/models/post.js');

//middleware for images
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


// configure and connect to database
var db = mongoose.connect('mongodb://tritiatimmins:Harley*8@ds019658.mlab.com:19658/biketrader');

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

app.post('/api/post', function(req, res, next) {
  
  var newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    color: req.body.color,
    price: req.body.price
  });
  newPost.save(function(err, newPost) {
    if (err) { return next(err); }
    res.json(req.body);
  });
  console.log('newPost', newPost);

});


// app.get('/api/posts', function (req, res, next) {
//   Post.find(function(err, posts) {
//     if (err) { return next(err) }
//     res.json(posts)
//   })
// })

app.get('/api/feed', function (req, res, next) {
  Post.find(function(err, posts) {
    if(err) {return next (err)}
      res.json(posts);
  })
  console.log('feed', Post);
})


// uncomment after upload is defined
// app.post('/upload', multipartMiddleware,upload);

// start app
app.listen(port);

// shout out to the user
console.log('Listening on port:', port);

module.exports = app;