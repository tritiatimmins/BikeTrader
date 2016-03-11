// grab the mongoose model
var mongoose = require('mongoose');

// define nerd model
module.exports = mongoose.model('AdPost', {
  _id: {type: Number},
  title: {type: String, default: '', required: true, trim: true, minlength: 10, maxlength: 25},
  description: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 250},
  color: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 25},
  // adjust color type? , because we're going to make a dropdown to choose from for color value.
  userId: {type: Number},
  // price: {type: Number, get: getPrice, set: setPrice}
});