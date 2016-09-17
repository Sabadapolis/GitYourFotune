var answer = require('./answerModel');
var answerDto = require('./answerDto');

//////////// GET FUNCTIONS ////////////

exports.get = function (req, res) {
    answer.find({isPublished: true}).then(function(success){
        res.json(success);
    }, function(error){
        res.json(error);
    })
}

exports.getAll = function (req, res){
    answer.find().then(function(success){
        res.json(success);
    }, function (error){
        res.json(error);
    })
}

//////////// POST FUNCTIONS ////////////

exports.addAnswer = function(req, res){
    var newAnswer = new answerDto(req.body);

    answer.create(newAnswer).then(function(success){
        res.json(success);
    }, function(error){
        res.json(error);
    })
}

//////////// TEST DATA FUNCTIONS ////////////

exports.createTest = function (req, res, next){
    answer.create({text: 'Test Question', isPublished: true}).then(function(success){
        res.json('okay');
    }, function(error){
        res.json('fail');
    });
}