 var dcl = require('../../dcl');

module.exports = {

	findMySuperUser : function (req, callback) {

		var id = req.params.id;

		var cb = function(response){
			if(response.status === 'success'){
				// do something with data
				callback(response);
			} else {
				// do something with error
				callback(response);
			}
		}

		dcl.getById(id, 'user', cb);
	},

	create : function (req, callback) {

		var data = req.body;

		// Apply validations hare

		var cb = function(response){
			if(response.status === 'success'){
				// do something with data
				callback(response);
			} else {
				// do something with error
				callback(response);
			}
		}

		dcl.create(data, 'user', cb);
	},

	updateUserById : function (req, callback) {
		var id = req.params.id;
		var data = req.body;

		// Apply validations hare

		var cb = function(response){
			if(response.status === 'success'){
				// do something with data
				callback(response);
			} else {
				// do something with error
				callback(response);
			}
		}

		dcl.updateById(id,data, 'user', cb);
	}

}