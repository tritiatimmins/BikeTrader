var mongoose = require('mongoose');

var userSchema = new mongoose.schema({
	id: Number,
	name: String,
	email: String,
	phoneNumber: Number
});

var User = mongoose.model('User', userSchema)

module.exports = User;