var user = require('./userModel');
var userDto = require('./userDto');

//////////// GET FUNCTIONS ////////////

exports.get = function (req, res) {
    user.find({userName:req.params.userName}).then(function(success){
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


//////////// PUT ////////////
exports.newUser = function(req, res){

    var newUser = new userDto(req.body);

    user.create(newUser).then(function(success){
        res.json(success);
    }, function(error){
        res.json(error);
    });
}

/////////// POST ////////////
exports.updateUser = function(req, res){
    user.update({userName:req.body.userName}, req.body).then(function(success){
        res.json(success)
    }, 
    function(failure){
        res.json(failure)
    });
}