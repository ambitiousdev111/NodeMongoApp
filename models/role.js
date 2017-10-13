var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
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
	permissions: [{
		type: String,
		trim:true,
		required:true
	}]

});

module.exports = mongoose.model('Role', roleSchema);