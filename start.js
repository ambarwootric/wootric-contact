var express = require('express');
var path = require('path');
var app = express();

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname)); // set static files location, in this case the route, add a file name if not

app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});