var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName : {type: String},
    passwordHash: { type: String },
    userIsAdmin : {type: Boolean}
});

module.exports = mongoose.model('user', userSchema);