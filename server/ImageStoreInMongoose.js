
//storing and displaying an image in mongodb using mongoose and express
//require module dependencies
var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();

//image path. I'm using web historian as a model
var imgPath = 'Images.jpeg';

//connect to the db
mongoose.connect('mongodb://tritiatimmins:Harley*8@ds019638.mlab.com:19638/tritiadb');

var port = process.env.PORT || 3333; 

//example schema of the image
var imageSchema = new Schema({
	img: {data: Buffer, contentType: String}
});

var A = mongoose.model('A', imageSchema);

mongoose.connection.on('open', function () {
  console.error('mongo is open');

  // empty the collection
  A.remove(function (err) {
    if (err) throw err;

    console.error('removed old docs');

    // store an img in binary in mongo
    var a = new A;
    a.img.data = fs.readFileSync(imgPath);
    a.img.contentType = 'image/jpeg';
    a.save(function (err, a) {
      if (err) throw err;

      console.error('saved img to mongo');

      // start a demo server
      // var server = express.createServer(); //this has an error bc createServer is deprecated
      app.get('/', function (req, res, next) {
        A.findById(a, function (err, doc) {
          if (err) return next(err);
          res.contentType(doc.img.contentType);
          res.send(doc.img.data);
        });
      });

      app.on('close', function () {
        console.error('dropping db');
        mongoose.connection.db.dropDatabase(function () {
          console.error('closing db connection');
          mongoose.connection.close();
        });
      });

      app.listen(port, function (err) {
        // var address = app.address();
        console.error('server listening on http://%s:%d', port);
        console.error('press CTRL+C to exit');
      });

      process.on('SIGINT', function () {
        app.close();
      });
    });
  });

});

// var port = process.env.PORT || 3333; 