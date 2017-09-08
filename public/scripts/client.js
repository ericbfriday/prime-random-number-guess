$(document).ready(onReady);

var maxNumber = 0;

function onReady() {
    console.log('jQuery sourced!');
    $('#submitSetup').on('click', submitSetup);
};

function submitSetup() {
    //console.log('You clicked me!');
    if ($('input[name=level]:checked').val() === "easy") {
        console.log('you clicked easy!');
        maxNumber = 10;
    } else if ($('input[name=level]:checked').val() === "medium") {
        console.log("you clicked medium!");
        maxNumber = 50;
    } else if ($('input[name=level]:checked').val() === "hard") {
        console.log("you clicked hard!");
        maxNumber = 100;
    } else {
        console.log("wtf!?");
        maxNumber = 0;
    }
    return maxNumber;
}

function generator(anyNumber) {
    var randomNumber = Math.floor(Math.random() * anyNumber);
    return randomNumber;
}