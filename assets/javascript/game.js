// Variables

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessedSoFar = "";
var randomLetter = "";
var userGuess = "";

//array for letters

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//code to randomly pick letter

function genLetter(array) {
  return array[Math.floor(Math.random() * array.length)];
};

//updates info to html

function updateStats() {
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("losses").innerHTML = "Losses: " + losses;
  document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
  document.getElementById("guessed-so-far").innerHTML = "Guessed So Far: " + guessedSoFar;
};
//game function
function game() {
  //compare user guess to computer random letter
  randomLetter = genLetter(letters);
  console.log("secret: " + randomLetter);

  // code for  user letters pressed
  document.onkeyup = function (event) {
    userGuess = (event.key.toLowerCase());
    console.log("user: " + userGuess);
    //guess compare
    //wrong guess: minus guess update stat
    if (userGuess != randomLetter) {
      guessesLeft--;
      guessedSoFar = guessedSoFar + " " + userGuess;
      updateStats();
      //wrong: no guess, left reset game update stat
      if (guessesLeft === 0) {
        guessesLeft = 5;
        guessedSoFar = "";
        randomLetter = "";
        losses++;
        updateStats();
        game();
      };
      //correct: plus wins
    } else {
      wins++;
      guessesLeft = 5;
      guessedSoFar = "";
      randomLetter = "";
      updateStats();
      game();
    };
  };
};

game();
