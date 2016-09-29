var router = require('express').Router();
var controller = require('./userController');

//////////// GET ////////////
router.route('/').get(controller.getAll);
router.route('/:id').get(controller.get);

//////////// PUT ////////////
router.route('/').put(controller.newUser);

//////////// POST ////////////
router.route('/').post(controller.updateUser);

//////////// DELETE ///////////
router.route('/').delete(controller.removeUser);

module.exports = router;
