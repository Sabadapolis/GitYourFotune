var router = require('express').Router();
var jwt = require('jsonwebtoken');
var app = require('express');
var config = require('../config/config');

router.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies['access-token'];

    if (token) {
        jwt.verify(token, config.secrets.jwt, function (err, userContext) {
            if (err) {
                req.user = null;
                req.isAuthorized = false;
                next();
            } else {
                req.user = userContext;
                req.isAuthorized = true;
                next();
            }
        });

    } else {
        req.user = null;
        req.isAuthorized = false;
        next();
    }
});

//////////// CONFIGURE ROUTES ////////////

router.use('/auth', require('./auth/authRoutes'));
router.use('/test', require('./test/testRoutes'));
router.use('/answer', require('./answer/answerRoutes'));
router.use('/user', require('./user/userRoutes'));
router.use('/question', require('./question/questionRoutes'));

module.exports = router;