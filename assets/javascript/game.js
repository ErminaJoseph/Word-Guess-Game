var wins = 0;
var numberOfGuesses = 20;
var chosenLetterE = document.getElementById("letter-e");
var chosenLetterU = document.getElementById("letter-u");
var chosenLetterP = document.getElementById("letter-p");
var chosenLetterH = document.getElementById("letter-h");
var chosenLetterO = document.getElementById("letter-o");
var chosenLetterR = document.getElementById("letter-r");
var chosenLetterI = document.getElementById("letter-i");
var chosenLetterA = document.getElementById("letter-a");
var guessesText = document.getElementById("guesses-left");
var letterText = document.getElementById("letters-used");

 
document.onkeyup = function(event) {
    var userChoice = event.key;

    if (userChoice === "e") {
        chosenLetterE.textContent = "E";
    }

    if (userChoice === "u") {
        chosenLetterU.textContent = "U";
    }

    if (userChoice === "p") {
        chosenLetterP.textContent = "P";
    }

    if (userChoice === "h") {
        chosenLetterH.textContent = "H";
    }

    if (userChoice === "o") {
        chosenLetterO.textContent = "O";
    }

    if (userChoice === "r") {
        chosenLetterR.textContent = "R";
    }

    if (userChoice === "i") {
        chosenLetterI.textContent = "I";
    }

    if (userChoice === "a") {
        chosenLetterA.textContent = "A";
    }
    
    else {
        numberOfGuesses--;
        guessesText.textContent = numberOfGuesses;
        letterText.textContent = userChoice;
    }
};