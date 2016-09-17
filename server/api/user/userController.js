var user = require('./userModel');

//////////// GET FUNCTIONS ////////////

exports.get = function (req, res) {
    user.find({isPublished: true}).then(function(success){
        res.json(success);
    }, function(error){
        res.json(error);
    })
}

exports.getAll = function (req, res){
    user.find().then(function(success){
        res.json(success);
    }, function (error){
        res.json(error);
    })
}