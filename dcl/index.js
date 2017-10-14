let mongoose = require('mongoose');
let models = require('../models');

module.exports = {

	getAll: (modelName, callbackFn) => {

		let response = {};

		models[modelName].find((err, rows) => {
            if(err) {
                response.status = 'error';
                response.data = err;
            } else {
            	response.status = 'success';
                response.data = rows;
            }
            
            callbackFn(response);
        });
	},

	getById: (id, modelName, callbackFn) => {

		let response = {};

		models[modelName].findOne({_id: id}, (err, row) => {
            if(err) {
                response.status = 'error';
                response.data = err;
            } else {
            	response.status = 'success';
                response.data = row;
            }
            
            callbackFn(response);
        });
	},

	create:  (data, modelName, cb) => {

		let response = {};
        data._id = new mongoose.Types.ObjectId();
		let newData = new models[modelName](data);

		newData.save(data, (err, row) => {
			if(err) {
                response.status = 'error';
                response.data = err;
            } else {
            	response.status = 'success';
                response.data = row;
            }
            cb(response);
		});
		
	},

	update: (id, data, modelName, cb) => {

		let response = {};

		models[modelName].findOne({_id: id}, (err, row) => {
            if(err) {
                response.status = 'error';
                response.data = err;
                cb(response);
            } else if(!row) {
                response.status = 'error';
                response.message = 'NOT_FOUND';
                response.data = null;
                cb(response);
            } else {

            	row.firstName = data.firstName;
            	row.lastName = data.lastName;

	            row.save((updationErr, uodatedRow) => {
	                if(err) {
	                    response.status = 'error';
		                response.data = updationErr;
	                } 
	                else {
	                    response.status = 'success';
		                response.data = uodatedRow;
	                }

	                cb(response);
	            });
            }
        });
	},

	delete:  (id, modelName, cb) => {

		let response = {};

		models[modelName].findByIdAndRemove({_id: id}, (err, deletedRow) => {
            if(err) {
                response.status = 'error';
                response.data = err;
            } else {
            	response.status = 'success';
                response.data = deletedRow;
            }
            cb(response);
        });
	}
}
