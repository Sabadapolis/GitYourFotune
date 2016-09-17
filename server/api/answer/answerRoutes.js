var router = require('express').Router();
var controller = require('./answerController');

router.route('/').get(controller.getAll);
router.route('/createTest').get(controller.createTest);

module.exports = router;
