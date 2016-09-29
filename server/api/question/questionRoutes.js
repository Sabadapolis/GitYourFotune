var router = require('express').Router();
var controller = require('./questionController');

//////////// GET ////////////
router.route('/').get(controller.getAll);
router.route('/:id').get(controller.get);

//////////// PUT ////////////
router.route('/').put(controller.newQuestion);

//////////// POST ////////////
router.route('/').post(controller.updateQuestion);

//////////// DELETE ///////////
router.route('/').delete(controller.removeQuestion);

module.exports = router;