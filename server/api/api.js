var router = require('express').Router();

router.use('/test', require('./test/testRoutes'));
router.use('/answer', require('./answer/answerRoutes'));

module.exports = router;