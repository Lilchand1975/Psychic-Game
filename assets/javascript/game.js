var lettersArray = ["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];
var lettersGuessedArray = [];
var letterToGuess = null;

var guessesRemaining = 9;
var wins = 0;
var losses = 0;

window.onload = function() {
    var index = getRandomLetter();
    console.log("Letter to be guessed " +  letterToGuess);
  }

  function displayRemainingGuesses(){
    document.getElementById("number-of-chances").innerHTML = guessesRemaining;
}

function getRandomLetter(){
   var i =  Math.floor(Math.random() * lettersArray.length);
    letterToGuess = lettersArray[i];
    return letterToGuess;
}
document.onkeyup = function(event) {
                 
    var letter = event.key;    
    $("#guesses").append(letter + ", ");
    
    if(lettersArray.includes(letter)){

        if(letter == letterToGuess){
            wins = wins + 1;
            guessesRemaining = 9;
            document.getElementById("number-of-win").innerHTML = wins;
            displayRemainingGuesses();

            index = getRandomLetter();
            console.log("Letter to be guessed " +  letterToGuess);
            document.getElementById("guesses").innerHTML = "";
        }else{
            guessesRemaining = guessesRemaining - 1;
            displayRemainingGuesses();
            if(guessesRemaining == 0){                
                losses = losses + 1;
                document.getElementById("number-of-loss").innerHTML = losses;
                guessesRemaining = 9;  
                displayRemainingGuesses();  
                document.getElementById("guesses").innerHTML = "";        
            }            
        }
    }
}