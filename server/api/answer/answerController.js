var answer = require('./answerModel');

exports.getAll = function (req, res, next) {
    answer.find({}).then(function(success){
        res.json(success);
    }, function(error){
        
    })
}