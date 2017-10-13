var express = require('express');
var router = express.Router();
var services = require('../services');

/*
 * GET ALL
 */
router.get('/', services.user.list);

/*
 * GET
 */
router.get('/:id', services.user.show);

/*
 * POST
 */
router.post('/', services.user.create);

/*
 * PUT
 */
router.put('/:id', services.user.update);

/*
 * DELETE
 */
router.delete('/:id', services.user.remove);


module.exports = router;