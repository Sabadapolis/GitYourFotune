var _ = require('lodash');

var defaults = {
    question: '', 
    answer: '',
    isPublished: true
}

function questionDto(data) {
    var self = this;

    // Sets the default values, defined above, to the data object we are passing in.
    _.defaults(data, defaults);

    self.question = data.question;
    self.answer = data.answer;
    self.isPublished = data.isPublished;

    return self;
}

module.exports = questionDto;