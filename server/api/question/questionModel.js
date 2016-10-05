var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    question: { type: String },
    answer: { type: String },
	isPublished: { type: Boolean }
});

module.exports = mongoose.model('question', questionSchema);