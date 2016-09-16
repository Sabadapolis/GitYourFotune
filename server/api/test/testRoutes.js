var router = require('express').Router();
var controller = require('./testController');

router.route('/').get(controller.get);
router.route('/balls').get(controller.getBalls);

module.exports = router;
