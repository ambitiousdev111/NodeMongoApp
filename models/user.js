var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstName: { type: String, trim: true, required: true },
	lastName: {type: String, trim: true, required: true},
	cellPhoneNumber : {type: Number, unique: true},
	email: { type: String, unique: true, lowercase: true, trim: true },
	password: String
});

module.exports = mongoose.model('User', userSchema);
