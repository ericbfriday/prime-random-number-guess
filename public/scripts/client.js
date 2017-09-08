$(document).ready(onReady);

var maxNumber = 0;
var cpuNum = 0;

function onReady() {
    console.log('jQuery sourced!');
    $('#gameMode').hide();
    $('#submitSetup').on('click', submitSetup);
    $('#submitGuesses').on('click', roundCheck);
    $('#abandonGame').on('click', abandonGame);
};

function submitSetup() {
    $('#setupMode').hide();
    $('#gameMode').show();
    //console.log('You clicked me!');
    if ($('input[name=level]:checked').val() === "easy") {
        console.log('you clicked easy!');
        $('#maxNumber').html('<p>Easy Mode: Max number 10</p>');
        maxNumber = 10;
    } else if ($('input[name=level]:checked').val() === "medium") {
        console.log("you clicked medium!");
        $('#maxNumber').html('<p>Medium Mode: Max number 50</p>');
        maxNumber = 50;
    } else if ($('input[name=level]:checked').val() === "hard") {
        console.log("you clicked hard!");
        $('#maxNumber').html('<p>Hard Mode: Max number 100</p>');
        maxNumber = 100;
    } else {
        console.log("wtf!?");
        maxNumber = 0;
    };
    //cpuNum = generator(maxNumber);
    return getRandom();
};

function getRandom() {
    console.log(maxNumber);
    var objectToSend = {max: maxNumber};
    console.log('getting random number');
    $.ajax({
        type: 'POST',
        url: '/random',
        data: objectToSend,
        success: function(serverResp) {
            console.log('SUCCESS!', serverResp);
        }
    }
    )};

//var cpuNum = generator(maxNumber);

function checkGuess(playerGuess, cpuGuess) {
    if (playerGuess > cpuGuess) {
        console.log('Too high!');
    } else if (playerGuess < cpuGuess) {
        console.log('Too low!');
    } else if (playerGuess == cpuGuess) {
        console.log('YOU WIN!!');
    } else {
        console.log('You broke the game >:C');
    }
};

var guessCount = 0;

function roundCheck() {
    var player1 = $('#guess1').val();
    var player2 = $('#guess2').val();
    var player3 = $('#guess3').val();
    var player4 = $('#guess4').val();
    checkGuess(player1, cpuNum);
    checkGuess(player2, cpuNum);
    checkGuess(player3, cpuNum);
    checkGuess(player4, cpuNum);
    guessCount += 1;
    $('#guessCount').text(guessCount);
    $('#guess1').val('');
    $('#guess2').val('');
    $('#guess3').val('');
    $('#guess4').val('');
};

function abandonGame() {
    $('#guess1').val('');
    $('#guess2').val('');
    $('#guess3').val('');
    $('#guess4').val('');
    $('#guessCount').text(0);
    $('#maxNumber').text(0);
    $('#gameMode').hide();
    $('#setupMode').show();
};
