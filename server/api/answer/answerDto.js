var _ = require('lodash');

var defaults = {
    text: '', 
    isPublished: true
}

function answerDto(data) {
    var self = this;

    // Sets the default values, defined above, to the data object we are passing in.
    _.defaults(data, defaults);

    self.text = data.text;
    self.isPublished = data.isPublished;

    return self;
}

module.exports = answerDto;