var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
    text: { type: String },
	isPublished: { type: Boolean }
});

module.exports = mongoose.model('answer', answerSchema);