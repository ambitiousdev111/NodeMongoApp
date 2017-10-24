var express = require('express');
var router = express.Router();
var services = require('../services');

/*
 * GET ALL
 */
router.get('/', services.company.list);

/*
 * GET
 */
router.get('/:id', services.company.show);

/*
 * POST
 */
router.post('/', services.company.create);

/*
 * PUT
 */
router.put('/:id', services.company.update);

/*
 * DELETE
 */
router.delete('/:id', services.company.remove);


module.exports = router;