var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    text: { type: String },
	isPublished: { type: Boolean }
});

module.exports = mongoose.model('user', userSchema);