// grab the mongoose model
var mongoose = require('mongoose');

var fs = require('fs');

// //require image model
// var Image = require('/image.js');

//create image schema
var imageSchema = new mongoose.Schema({
  img: {data: Buffer, contentType: String}
});

//create image model
var Image = mongoose.model('Image', imageSchema);

//define ad post model
var postSchema = new mongoose.Schema({

  title: {type: String, default: '', required: true, trim: true, minlength: 10, maxlength: 25},
  description: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 250},
  color: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 25},
  // adjust color type? , because we're going to make a dropdown to choose from for color value.
  price: {type: Number},
  //add image
  image: [imageSchema]
});


module.exports = mongoose.model('Post', postSchema);