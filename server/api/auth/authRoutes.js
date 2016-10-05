var router = require('express').Router();
var controller = require('./authController');

//////////// GET ////////////
router.route('/').get(controller.currentUserInfo);

//////////// POST ////////////
router.route('/').post(controller.authenticate);

module.exports = router;
