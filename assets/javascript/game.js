var theWord = ["e", "u", "p", "h", "o", "r", "i", "a"];
var wins = 0;
var numberOfGuesses = 20;
 
document.onkeyup = function(event) {
    var userChoice = event.key;

    if (userChoice === "e") {
        var chosenLetterE = document.getElementById("letter-e");
        chosenLetterE.textContent = theWord[0].toUpperCase();
    } else if (userChoice === "u") {
        var chosenLetterU = document.getElementById("letter-u");
        chosenLetterU.textContent = theWord[1].toUpperCase();
    } else if (userChoice === "p") {
        var chosenLetterP = document.getElementById("letter-p");
        chosenLetterP.textContent = theWord[2].toUpperCase();
    } else if (userChoice === "h") {
        var chosenLetterH = document.getElementById("letter-h");
        chosenLetterH.textContent = theWord[3].toUpperCase();
    } else if (userChoice === "o") {
        var chosenLetterO = document.getElementById("letter-o");
        chosenLetterO.textContent = theWord[4].toUpperCase();
    } else if (userChoice === "r") {
        var chosenLetterR = document.getElementById("letter-r");
        chosenLetterR.textContent = theWord[5].toUpperCase();
    } else if (userChoice === "i") {
        var chosenLetterI = document.getElementById("letter-i");
        chosenLetterI.textContent = theWord[6].toUpperCase();
    } else if (userChoice === "a") {
        var chosenLetterA = document.getElementById("letter-a");
        chosenLetterA.textContent = theWord[7].toUpperCase()
    } else {
        numberOfGuesses--;
        var guessesText = document.getElementById("guesses-left");
        var letterText = document.getElementById("letters-used");
        guessesText.textContent = numberOfGuesses;
        letterText.textContent = userChoice.toUpperCase();
    }
};