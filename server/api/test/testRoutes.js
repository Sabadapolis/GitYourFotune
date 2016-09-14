var router = require('express').Router();
var controller = require('./testController');

router.route('/')
  .get(controller.get)

module.exports = router;
