// grab the mongoose model
var mongoose = require('mongoose');
var fs = require('fs');

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
  image: {data: Buffer, contentType: String}
});
//step two, export a model 
module.exports = mongoose.model('Post', postSchema);

