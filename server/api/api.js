var router = require('express').Router();

router.use('/test', require('./test/testRoutes'));

module.exports = router;