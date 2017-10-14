var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var branchModel = require('./branch');
var roleModel = require('./role');

var userSchema = new Schema({
		// _id: Schema.Types.ObjectId,
		firstName: {
			type: String,
			trim: true,
			// required: true
		},
		lastName: {
			type: String,
			trim: true,
			// required: true
		},
		cellPhoneNumber: {
			type: Number,
			default: 123
			// unique: true
		},
		email: {
			type: String,
			// unique: true,
			lowercase: true,
			trim: true,
			default: 'abc@gmail.com'
		},
		branches:[{
			type: Schema.Types.ObjectId, 
			ref:  branchModel 
		}],
		role_id:{
			type: Schema.Types.ObjectId,
			ref: roleModel
		},
		createdBy:{
			type: Schema.Types.ObjectId, 
			ref:  userSchema
		},
		password: String,
		// local            : {
	 //        email        : String,
	 //        password     : String
	 //    },
	    facebook         : {
	        id           : String,
	        token        : String,
	        email        : String,
	        name         : String
	    },
	    twitter          : {
	        id           : String,
	        token        : String,
	        displayName  : String,
	        username     : String
	    },
	    google           : {
	        id           : String,
	        token        : String,
	        email        : String,
	        name         : String
	    }
	});


module.exports = mongoose.model('User', userSchema);
