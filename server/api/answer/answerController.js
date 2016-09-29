var answer = require('./answerModel');
var answerDto = require('./answerDto');

//////////// GET FUNCTIONS ////////////

exports.get = function (req, res) {
    user.findOne({ _id: req.params.id }, function (error, answerData) {
        if (!error) {
            res.json(answerData)
        }
        else {
            res.json(error)
        };
    })
}

exports.getAll = function (req, res) {
    answer.find().then(function (success) {
        res.json(success);
    }, function (error) {
        res.json(error);
    })

}

//////////// POST FUNCTIONS ////////////

exports.addAnswer = function(req, res){
    // This will take the content of the body property from the request, and pass it into the DTO (Data Type Object) and convert 
    // the body into something we can use in code.
    var newAnswer = new answerDto(req.body);

    answer.create({ addAnswer: req.body.addAnswer }, req.body).then(function (success) {
        res.json(success)
    },
        function (failure) {
            res.json(failure)
        });
}

//////////// TEST DATA FUNCTIONS ////////////

exports.createTest = function (req, res, next){
    answer.create({text: 'Test Question', isPublished: true}).then(function(success){
        res.json('okay');
    }, function(error){
        res.json('fail');
    });
}

/////////// DELETE ///////////

exports.removeAnswer = function (req, res) {
    answer.remove({ removeAnswer: req.body.userName }, function (error) {
        if (!error) {
            res.json(error);
        }
        else {
            res.json("success")
        }
    })
}