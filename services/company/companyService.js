/**
 * branch.js
 *
 * @description :: Server-side logic for managing company.
 */

var dcl = require('../../dcl');

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
       
        dcl.getAll('Company', cb);
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
       
        dcl.getById(id, 'Company', cb);
    },

    /**
     * create
     */
    create: (req, res) => {
        
        let data = req.body;

        var cb2 = (resp) => {
        	if(resp.status === 'success'){
				// do something with data
				res.send(resp);
			} else {
				// do something with error
				res.send(resp);
			}
        }

        var cb = (response) => {
			if(response.status === 'success'){
				if(data.isHq){
        			dcl.create(data, 'Branch', cb2);
				} else {
					res.send(response);
				}
				// do something with data
				// 
			} else {
				// do something with error
				res.send(response);
			}
		}
       
        dcl.create(data, 'Company', cb);
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
       
        dcl.update(id, data, 'Company', cb);
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
       
        dcl.delete(id, 'Company', cb);
    }
};