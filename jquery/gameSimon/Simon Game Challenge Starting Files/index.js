// alert("Welcome to the game");
// $("h1")

var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor((Math.random()*4));
    var randomChosenColour = buttonColor[randomNumber];
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColour);
};





