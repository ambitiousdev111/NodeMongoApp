var express = require('express');
var router = express.Router();
var services = require('../services');

/*
 * GET ALL
 */
router.get('/', services.users.list);

/*
 * GET
 */
router.get('/:id', services.users.show);

/*
 * POST
 */
router.post('/', services.users.create);

/*
 * PUT
 */
router.put('/:id', services.users.update);

/*
 * DELETE
 */
router.delete('/:id', services.users.remove);


module.exports = router;