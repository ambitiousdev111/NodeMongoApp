var default_roles = require('../../db.seeds/default_roles');
var roleModel = require('../../models/role');
var dcl = require('../../dcl');

module.exports = {

 seed_roles : (req, res) => {
    var i;
   	var cb = (response) => {
			if(response.status === 'success'){
				// do something with data
				console.log("role created in mongo")
				res.send(response);
			} else {
				// do something with error
				res.send(response);
			}
		}
        dcl.bulkCreate(default_roles, roleModel, cb);
 //   }
        

  
    }



};