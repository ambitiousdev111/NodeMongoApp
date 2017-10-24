var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userModel = require('./user');
var companyModel = require('./company');

var branchSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: {
		type: String,
		trim: true,
		required: true
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: userModel
	},
	companyId:{
		type: Schema.Types.ObjectId,
		ref: companyModel
	},
	gstNumber: String,
	address: String,
	state: String,
	city: String,
	isHq: Boolean
});

module.exports = mongoose.model('Branch', branchSchema);
