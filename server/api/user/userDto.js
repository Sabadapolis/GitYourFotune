var _ = require('lodash');

var defaults = {
    userName : "",
    userPassword : "",
    userIsAdmin : false
}

function userDto(data) {
    var self = this;

    // Sets the default values, defined above, to the data object we are passing in.
    _.defaults(data, defaults);

    self.userName = data.userName;
    self.userPassword = data.userPassword;
    self.userIsAdmin = data.userIsAdmin

    return self;
}

module.exports = userDto;