// model for bike post schema
var mongoose = require('mongoose');


var bikeSchema = mongoose.schema({
  _id: {type: Number}
  title: {type: String, default: '', required: true, trim: true, minlength: 10, maxlength: 25},
  description: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 250},
  color: {type: String, default: '', required: true, trim: true, minlength: 3, maxlength: 25},
  // adjust color type? , because we're going to make a dropdown to choose from for color value.
  userId: {type: Number},
  price: {type: Number, get: getPrice, set: setPrice},
});


var getPrice = function (num) {
  return (num / 100).toFixed(2);
};

var setPrice = function(num) {
  return num * 100;
};


module.exports = mongoose;


// var user = {
//   name: String,
//   email: String,
//   phoneNumber: Number,
//   password: 'secret',
//   posts: [1, 2, 3, 4, 45]
// };

// TODO: set up user schema
  // link userschma via userId to bikeSchema