var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var branchModel = require('./branch')


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
		createdBy:[{
			type: Schema.Types.ObjectId, 
			ref:  userSchema
		}],
		password: String
	});


module.exports = mongoose.model('User', userSchema);
