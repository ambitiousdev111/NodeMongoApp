/**
 * users.js
 *
 * @description :: Server-side logic for managing users.
 */

var dcl = require('../../dcl');
var userModel = require('../../models/user');

module.exports = {

    /**
     * list
     */
    list: (req, res) => {

    	var cb = (response) => {
			if(response.status === 'success'){
				// do something with data
				res.send(response);
			} else {
				// do something with error
				res.send(response);
			}
		}
       
        dcl.getAll(userModel, cb);
    },

    /**
     * show
     */
    show: (req, res) => {

        var id = req.params.id;

        var cb = (response) => {
			if(response.status === 'success'){
				// do something with data
				res.send(response);
			} else {
				// do something with error
				res.send(response);
			}
		}
       
        dcl.getById(id, userModel, cb);
    },

    /**
     * create
     */
    create: (req, res) => {
        
        let data = req.body;

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
    },

    /**
     * carController.update()
     */
    update: (req, res) => {

    	let id = req.params.id;
    	let data = req.body;

        var cb = (response) => {
			if(response.status === 'success'){
				// do something with data
				res.send(response);
			} else {
				// do something with error
				res.send(response);
			}
		}
       
        dcl.update(id, data, userModel, cb);
    },

    /**
     * remove
     */
    remove: (req, res) => {
        let id = req.params.id;

        var cb = (response) => {
			if(response.status === 'success'){
				// do something with data
				res.send(response);
			} else {
				// do something with error
				res.send(response);
			}
		}
       
        dcl.delete(id, userModel, cb);
    }
};