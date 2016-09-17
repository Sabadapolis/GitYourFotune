var answer = require('./answerModel');

exports.getAll = function (req, res, next) {
    answer.find().then(function(success){
        res.json(success);
    }, function(error){
        
    })
}

exports.createTest = function (req, res, next){
    answer.create({text: 'Test Question', isPublished: true}).then(function(success){
        res.json('okay');
    }, function(error){
        res.json('fail');
    });
}