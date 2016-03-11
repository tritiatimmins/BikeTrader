// add models, controllers, routes, and anyhing backend Node specific to the app folder

// get nerd model
var Post = require('./models/post');

module.exports = function(app) {

  // server routes --------------------------------------
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/post', function(req, res) {

    // use mongoose to get all nerds in the database
    Post.find(function(err, nerds) {

      // if error send error
      if (err) {
        res.send(err);
      }

      // return all nerds in JSON
      // res.json();
      res.sendfile('./public/views/home.html');

    });
  });

  // route to handle creating here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes --------------------------------------
  
  // route to handle all angular requests
  app.get('/', function(req, res) {

    // load public/index.html file
    res.sendfile('./public/views/index.html');
  });




};
