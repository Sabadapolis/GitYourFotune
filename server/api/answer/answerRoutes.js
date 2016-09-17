var router = require('express').Router();
var controller = require('./answerController');

//////////// GET ////////////
router.route('/').get(controller.get);
router.route('/all').get(controller.getAll);
router.route('/createTest').get(controller.createTest);

//////////// POST //////////
router.route('/').post(controller.addAnswer);

module.exports = router;
