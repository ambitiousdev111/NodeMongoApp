var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userModel = require('./user');
var planModel = require('./plan');

var companySchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: {
		type: String,
		trim: true,
		required: true
	},
	uniqueName: {
		type: String,
		trim: true,
		required: true
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: userModel.User
	},
	gstNumber: String,
	address: String,
	state: String,
	city: String,
	planId: {
		type: Schema.Types.ObjectId,
		ref: planModel.Plan
	},
	subscription: {
		startDate:{ type: Date, default: Date.now } ,
		periodInDays: Number
	}
});

module.exports = mongoose.model('Company', companySchema);

