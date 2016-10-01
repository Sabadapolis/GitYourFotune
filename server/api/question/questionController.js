var question = require('./questionModel');
var questionDto = require('./questionDTO');

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


//////////// PUT ////////////
exports.newQuestion = function (req, res) {

    var newQuestion = new questionDto(req.body);

    question.create(newQuestion).then(function (success) {
        res.json(success);
    }, function (error) {
        res.json(error);
    });
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
    question.remove({ removeQuestion: req.body.removeQuestion }, function (error) {
        if (!error) {
            res.json(error);
        }
        else {
            res.json("success")
        }
    })
}