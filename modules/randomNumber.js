
module.exports = function(anyNumber) {
    var randomNumber = Math.floor(Math.random() * anyNumber)+1;
    console.log('Your module is here :D')
    return randomNumber;
};