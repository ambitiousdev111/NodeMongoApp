var rolesSeederService = require('./plansSeederService');
var plansSeederService = require('./rolesSeederService');
var superAdminOfAppSeederService = require('./superAdminOfAppSeederService');

module.exports = {

	 /**
     * create
     */
    seed_all: (req, res) => {
        
        var cb = (response) => {
			if(response.status === 'success'){
				// do something with data
				res.send(response);
			} else {
				// do something with error
				res.send(response);
			}
		}
       
        dcl.create(data, userModel, cb);
    }

};