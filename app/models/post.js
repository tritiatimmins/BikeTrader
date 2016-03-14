// grab the mongoose model
var mongoose = require('mongoose');

//define ad post model
var postSchema = new mongoose.Schema({
  
  title: {type: String, default: '', required: true, trim: true, maxlength: 25},
  description: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 250},
  color: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 25},
  price: {type: Number},
  picFile: {type: String},
  email: {type: String},
  dateCreated: {type: String}

});


module.exports = mongoose.model('Post', postSchema);