var models = require("../models");


module.exports = {

	getById: function (id, modeName, cb){
		models();
		// var response = {};
		// // search for known id
		// models[modeName].findById(id).then(result => {
		// 	response.status = 'success';
		// 	response.data = result;
		//   	cb(response);
		// }).catch(err => {
		// 	throw err;
		// 	response.status = 'error';
		// 	response.data = err;
		//   	cb(response);
		// });
	},

	// create:  (data, modeName, cb) => {
	// 	var response = {};
	// 	// search for known id
	// 	models[modeName].create(data).then(result => {
	// 		response.status = 'success';
	// 		response.data = result;
	// 	  	cb(response);
	// 	}).catch(err => {
	// 		throw err;
	// 		response.status = 'error';
	// 		response.data = err;
	// 	  	cb(response);
	// 	});
	// },

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
