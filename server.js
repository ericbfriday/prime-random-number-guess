var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var app = express();
var port = 5000;
var numberGenerator = require('./modules/randomNumber');
var randomNumber = 0;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', function(req, res) {
    console.log('In the / route')
    var ourIndexPath = path.join(__dirname, './public/views/index.html');
    res.sendFile(ourIndexPath);
});

app.post('/random', function(req, res) {
    console.log('In the /random route');
    console.log(parseInt(req.body.max));
    var randomNumber = numberGenerator(parseInt(req.body.max));
    console.log(randomNumber);
    res.sendStatus(200);
});

app.listen(port, function() {
    console.log('listening on port 5000');
});

