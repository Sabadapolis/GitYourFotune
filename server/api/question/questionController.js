var question = require('./questionModel');
var questionDto = require('./questionDTO');
var answer = require('../answer/answerModel');
var uniqueRandomArray = require('unique-random-array');
//////////// GET FUNCTIONS ////////////

exports.get = function (req, res) {
    user.findOne({ _id: req.params.id }, function (error, questionData) {
        if (!error) {
            res.json(questionData)
        }
        else {
            res.json(error)
        };
    })
}

exports.getAll = function (req, res) {
    question.find().then(function (success) {
        res.json(success);
    }, function (error) {
        res.json(error);
    })
}

exports.getLastFive = function (req, res){
    var q = question.find({}).
}


//////////// PUT ////////////
exports.newQuestion = function (req, res) {

    var newQuestion = new questionDto(req.body);

    answer.find().then(function (success) {
        var rand = new uniqueRandomArray(success);
        newQuestion.answer = rand().text;
        question.create(newQuestion).then(function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });
    })


}

/////////// POST ////////////
exports.updateQuestion = function (req, res) {
    question.update({ _id: req.body._id }, req.body).then(function (success) {
        res.json(success)
    }, function (failure) {
        res.json(failure)
    });
}
/////////// DELETE ///////////
exports.removeQuestion = function (req, res) {
    question.remove({ _id: req.body.id }, function (error) {
        if (!error) {
            res.json(error);
        }
        else {
            res.json("success")
        }
    })
}