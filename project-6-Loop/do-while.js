var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper + 1);
}

// do {
//   guess = prompt('I am thinking of a number between 1 and 10. what is it?');
//   guessCount += 1;
//   if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
//   }
// } while (!correctGuess);
// document.write('<h1>Upi guessed the number!!!</h1>');
// document.write('it took you ' + guessCount + 'tries to guess the number ' + randomNumber);

while (guessCount < 10){
  guess = prompt('I am thinking of a number between 1 and 10. what is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
} 
document.write('<h1>Upi guessed the number!!!</h1>');
document.write('it took you ' + guessCount + 'tries to guess the number ' + randomNumber);