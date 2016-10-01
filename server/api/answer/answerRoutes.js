var router = require('express').Router();
var controller = require('./answerController');

//////////// GET ////////////
router.route('/').get(controller.getAll);
router.route('/:id').get(controller.get);
router.route('/createTest').get(controller.createTest);

//////////// PUT //////////
router.route('/').put(controller.addAnswer);

//////////// POST //////////
router.route('/').post(controller.updateAnswer);

//////////// DELETE ///////////
router.route('/').delete(controller.removeAnswer);

module.exports = router;
