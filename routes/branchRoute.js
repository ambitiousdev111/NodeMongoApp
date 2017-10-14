var express = require('express');
var router = express.Router();
var services = require('../services');

/*
 * GET ALL
 */
router.get('/', services.branch.list);

/*
 * GET
 */
router.get('/:id', services.branch.show);

/*
 * POST
 */
router.post('/', services.branch.create);

/*
 * PUT
 */
router.put('/:id', services.branch.update);

/*
 * DELETE
 */
router.delete('/:id', services.branch.remove);


module.exports = router;