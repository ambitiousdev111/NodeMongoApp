var mongoose = require('mongoose');
var userModel = require('../models/user');

module.exports = {

	getById: function (id, modeName, cb){
		
		var response = {};
		// search for known id
		userModel.find({}, function(err, data){
			if(err){
				cb(err);
			} else {
				cb(data);
			}
		});
	},

	create:  (data, modelName, cb) => {
		var response = {};

		var newData = new userModel(data);

		newData.save(function(err, user, numAffected){
			cb({
				err: err,
				user: user,
				numAffected: numAffected
			});
			console.log('User created successfully', data);
		});
		
	},

	// updateById: function (id,data, modelName, cb){
	// 	var response = {};
	// 	// search for known id
	// 	models[modelName].find({
 //    	where: {
 //      		id: id
 //    	}
 //  	}).then(function(row) {
 //    if(row) {
 //      row.updateAttributes(data).then(result => {
	// 		response.status = 'success';
	// 		response.data = result;
	// 	  	cb(response);
	// 	}).catch(err => {
	// 		throw err;
	// 		response.status = 'error';
	// 		response.data = err;
	// 	  	cb(response);
	// 	});
 //    }
 //  });	

	// },

}
