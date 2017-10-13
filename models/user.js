var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var branchModel = require('./branch');
var roleModel = require('./role');

var userSchema = new Schema({
		_id: Schema.Types.ObjectId,
		firstName: {
			type: String,
			trim: true,
			required: true
		},
		lastName: {
			type: String,
			trim: true,
			required: true
		},
		cellPhoneNumber: {
			type: Number,
			unique: true
		},
		email: {
			type: String,
			unique: true,
			lowercase: true,
			trim: true
		},
		branches:[{
			type: Schema.Types.ObjectId, 
			ref:  branchModel.Branch 
		}],
		role_id:{
			type: Schema.Types.ObjectId,
			ref: roleModel.Role
		},
		createdBy:{
			type: Schema.Types.ObjectId, 
			ref:  userSchema
		},
		password: String
	});


module.exports = mongoose.model('User', userSchema);
