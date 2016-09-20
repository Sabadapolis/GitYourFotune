var router = require('express').Router();

router.use('/test', require('./test/testRoutes'));
router.use('/answer', require('./answer/answerRoutes'));
router.use('/user', require('./user/userRoutes'));

module.exports = router;