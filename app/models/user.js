var mongoose = require('mongoose');

//this will define a user in the database

//make a user schema
var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	phoneNumber: Number
});

//export the User model
module.exports = mongoose.model('User', userSchema);