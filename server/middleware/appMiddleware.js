var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

module.exports = function(app) {
	app.use(bodyParser.urlencoded({ extended: true}));
	app.use(bodyParser.json());
	app.use(cookieParser());
}