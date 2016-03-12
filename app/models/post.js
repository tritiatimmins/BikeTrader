// grab the mongoose model
var mongoose = require('mongoose');
//define ad post model
var postSchema = new mongoose.Schema({

  title: {type: String, default: '', required: true, trim: true, minlength: 10, maxlength: 25},
  description: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 250},
  color: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 25},
  // adjust color type? , because we're going to make a dropdown to choose from for color value.
  price: {type: Number}
});


module.exports = mongoose.model('Post', postSchema);