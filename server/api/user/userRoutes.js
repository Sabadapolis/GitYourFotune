var router = require('express').Router();
var controller = require('./userController');

//////////// GET ////////////
router.route('/').get(controller.get);
router.route('/user').get(controller.getAll);
router.route('/createadmin').post(controller.createAdmin)
router.route('/new').post(controller.newUser)



module.exports = router;
