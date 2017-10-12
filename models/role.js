var mongoose = require('mongoose');
var Schema = mongoose.schema;

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
		type:string,
		trim:true,
		required:true
	}]

});

module.exports = mongoose.model('Role', roleSchema);