var theWords = ["euphoria", "insecure", "gameofthrones", "ballers", "watchmen", "vice", "siliconvalley"];
var wins = 0;
var correctLettersGuessed = [];
var incorrectLettersGuessed = [];
var numberOfGuesses = 20;
var selectedWord = theWords[Math.floor(Math.random() * theWords.length)];
var splitWord = selectedWord.split("");
var blankSpace = [];


function intialDisplay(display) {
    for (var h = 0; h < splitWord.length; h++) {
        wordSpace = document.getElementById("word-space")
        wordSpace.textContent = blankSpace.push("_");
    }
}

document.onkeyup = function(event) {
    var userChoice = event.key;  

    var getStarted = document.getElementById("get-started");
    getStarted.textContent = "";

    for (var i = 0; i < splitWord.length; i++) {
        if (userChoice === splitWord[i].charAt(0)) {
            var wordSpace = document.getElementById("word-space");
            wordSpace.textContent = correctLettersGuessed.push(userChoice);
        }

    }
    
    

    
    

}

