module.exports = {
  
 seed_super_user: (req, res) => {
        
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