var userSchema = require('../user/userModel');
var user = require('../user/userDto');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');
var common = require('../common');

function _authenticate(req, res) {
    // Are there users?
    userSchema.find({}).then(function (success) {
        if (success.length > 0) {
            userSchema.findOne({ userName: req.body.userName }).then(function (success) {
                if (!success)
                    return common.unauthorized(res, "User Not Found");

                var foundUser = new user(success);

                if (foundUser.passwordValid(req.body.password)) {
                    var token = jwt.sign(foundUser, config.secrets.jwt, { expiresIn: config.expireTime });
                    res.cookie('access-token', token);
                    res.json({ success: true, message: "Success!" });
                }
                else {
                    return common.unauthorized(res, "Invalid password!");
                }
            }, function (error) {
                res.json({ success: false, message: "No user found" })
            })
        }
        else {
            var newUser = new user({ userName: "admin" });
            newUser.hashPassword("admin");

            userSchema.create(newUser).then(function (success) {
                _authenticate(req, res);
            }, function (error) {
                res.json("Error creating default user");
            });
        }
    }, function (error) {

    });
}

function _currentUserInfo(req, res) {
    if (!req.isAuthorized)
        return common.unauthorized(res);

    res.json(req.user);
}

exports.authenticate = _authenticate;
exports.currentUserInfo = _currentUserInfo