var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var app = express();
var port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/', function(req, res) {
    var ourIndexPath = path.join(__dirname, './public/views/index.html');
    res.sendFile(ourIndexPath);
});

app.listen(port, function() {
    console.log('listening on port 5000');
});