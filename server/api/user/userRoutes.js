var router = require('express').Router();
var controller = require('./userController');

//////////// GET ////////////
router.route('/').get(controller.get);
router.route('/user').get(controller.getAll);



module.exports = router;
