var router = require('express').Router();
var controller = require('./answersController');

router.route('/').get(controller.getAll);

module.exports = router;
