var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
    text: {type: String, default: ''},
	isPublished: {type: Boolean, default: true}
});

module.exports = mongoose.model('answer', answerSchema);