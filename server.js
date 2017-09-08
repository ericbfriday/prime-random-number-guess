var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var app = express();
var port = 5000;
var numberGenerator = require('./modules/randomNumber');
var randomNumber = 0;
var items = [];
var guessesToSend = [];

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

app.post('/', function(req, res) {
    items = req.body.items;
    console.log('In the BAse');
    console.log(items);
    res.sendStatus(200);
    loopArray();
});

function loopArray() {
    for (var i=0; i<items.length; i++) {
        //checkGuess(items[i], randomNumber);
        guessesToSend.push(checkGuess(items[i], randomNumber));
    }
    console.log(guessesToSend);
}

function checkGuess(playerGuess, cpuGuess) {
    if (playerGuess > cpuGuess) {
        return (playerGuess + ' Too high!');
    } else if (playerGuess < cpuGuess) {
        return (playerGuess + ' Too low!');
    } else if (playerGuess == cpuGuess) {
        return (playerGuess + ' YOU WIN!!');
    } else {
        return (playerGuess + ' You broke the game >:C');
    }
};

app.listen(port, function() {
    console.log('listening on port 5000');
});

