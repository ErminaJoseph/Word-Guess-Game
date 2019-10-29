var letters = ["e", "u", "p", "h", "o", "r", "i", "a"];
var wins = 0;
var numberOfGuesses = 20;

document.onkeyup = function(event) {
    var userChoice = event.key;

    if (userChoice === "e") {
        var lettersDiv = document.getElementById("letter-e");
        var chosenLetter = document.createElement("p");
        chosenLetter.textContent = "E";
        }
}