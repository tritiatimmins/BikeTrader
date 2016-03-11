// grab the mongoose model
var mongoose = require('mongoose');

//middleware for images
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

//dfine the image path RESEARCH ME
var imgPath = 'some/pathway/to/an/Image';

//step one, make a schema
var postSchema = new mongoose.Schema({
  title: String,
  description: String,
  color: String,
  price: Number,
  //store the ID of the image
});
//step two, export a model 
module.exports = mongoose.model('Post', postSchema);

