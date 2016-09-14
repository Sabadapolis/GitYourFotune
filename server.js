var express = require('express');
var app = express();
var api = require('./server/api/api');
var appMiddleware = require('./server/middleware/appMiddleware')(app);

// Configure the API
app.use('/api', api);

// Configure the bundles
app.get("/dist/js", function (req, res){
    res.sendFile(__dirname + '/dist/js/code.js');
})
app.get("/dist/css", function (req, res){
    res.sendFile(__dirname + '/dist/style/site.min.css');
})

// Return the angular app
app.use(express.static(__dirname + '/public'));
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the app
app.listen(8080);
console.log('Application started on port 8080');