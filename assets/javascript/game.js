// Variables
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var randomLetter = "";

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// code for wins

//code for losses

// code for guesses left

//code to randomly pick number
function genLetter(array) {
  return array[Math.floor(Math.random() * array.length)];
};
randomLetter = genLetter(letters);
console.log(randomLetter);
// code to console.log letters guessed
//for (let i = 0; i < ; i++);
