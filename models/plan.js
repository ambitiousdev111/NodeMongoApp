var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planSchema =new Schema({
		_id:Schema.Types.ObjectId,
		name: {
			type: String,
			trim: true,
			required: true
		},
		uniqueName:{
			type: String,
			trim: true,
			required: true
		},
		validityInDays:{
			type:Number
		}
	});

module.exports = mongoose.model('PlanSchema', planSchema);
