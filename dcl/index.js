module.exports = {

	getAll: (model, callbackFn) => {

		let response = {};

		model.find((err, rows) => {
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

	getById: (id, model, callbackFn) => {

		let response = {};

		model.findOne({_id: id}, (err, row) => {
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

	create:  (data, model, cb) => {

		let response = {};

		let newData = new model(data);

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

	update: (id, data, model, cb) => {

		let response = {};

		model.findOne({_id: id}, (err, row) => {
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

	delete:  (id, model, cb) => {

		let response = {};

		model.findByIdAndRemove({_id: id}, (err, deletedRow) => {
            if(err) {
                response.status = 'error';
                response.data = err;
            } else {
            	response.status = 'success';
                response.data = deletedRow;
            }
            cb(response);
        });
	},

}
