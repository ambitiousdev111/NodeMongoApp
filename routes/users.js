var express = require('express');
var router = express.Router();
var services = require('../services');




var getUserById = (req, res, next) => {

  var cb = function(response){
    res.send(response);
  };

  services.users.findMySuperUser(req, cb);

};

var saveUser = (req, res, next) => {

  var cb = function(response){
    res.send(response);
  };

  services.users.create(req, cb);

};

var updateUserById = (req,res,next) => {
	var cb = function(response){
		res.send(response);
	}
 	services.users.updateUserById(req,cb);	
}

router.get('/:id', getUserById);
router.post('/', saveUser);
router.put('/:id',updateUserById);

module.exports = router;