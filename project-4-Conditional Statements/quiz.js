// var answer =  prompt('what programming language is the name of a gem?');
// if ( answer.toUpperCase() === 'RUBY') {
//   document.write('<p>That\'s right</p>');
// } else {
//   document.write('<p>Sorry, that\'s wrong</p>');
// }

// Generate random number from 1 to 6
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt('I am thinking of a number between 1 and 6. what is it?');
// if(parseInt(guess) === randomNumber) {
//   document.write('<p>You guessed the number!</p>');
// } else {
//   document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
// }

// BOOLEAN
/*
The Random number Guessing Game 
Generates a number between 1 to 6 
and gives a player two attempts to 
guess the number.
*/

// assume the player didn't guess correctly
// var correctGuess = false;

// // generate random number from 1 to 6
// var randomNumber = Math.floor(Math.random() * 6) + 1;

// var guess = prompt('I am thinking of a number between 1 and 6. what is it?');

// /* test to see if the player is
// 1. correct
// 2. guessed too high
// 3. guessed too low
// */
// if (parseInt(guess) === randomNumber) {
//   correctGuess = true;
// } else if (parseInt(guess) < randomNumber) {
//   var guessMore = prompt('Try again. The number I am thinking is more than ' + guess);
//   if (parseInt(guessMore) === randomNumber) {
//     correctGuess = true;
//   }
// } else if (parseInt(guess) > randomNumber) {
//   var guessLess = prompt('Try again. The number I am thinking is less than ' + guess);
//   if (parseInt(guessLess) === randomNumber) {
//     correctGuess = true;
//   }
// }

// // test if player is correct and output response
// if (correctGuess) {
//   document.write('<p>You guessed the number!</p>');
// } else {
//   document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
// }

// QUIZ

/*
1. Ask at least five questions
2. keep track of the number of correct answers
3. Provide a final message after the quiz letting the user know the number of questions he or she got right.
4. Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/

// assume the player didn't guess correctly
var correctGuess = false;

// start counter at 0
var count = 0;

// ask questions
var q1 = prompt('what is my name?');
if(q1 === 'mohamed') {
  correctGuess = true;
  count++;
  console.log(count);
}
var q2 = prompt('what is the best programming language?');
if (q2 === 'javascript') {
  correctGuess = true;
  count++;
  console.log(count);
}
var q3 = prompt('who is the best president?');
if (q3 === 'obama') {
  correctGuess = true;
  count++;
  console.log(count);
}
var q4 = prompt('how old are you?');
if (parseInt(q4) === 30) {
  correctGuess = true;
  count++;
  console.log(count);
}
var q5 = prompt('where were you born?');
 if(q5 === 'guinea') {
  correctGuess = true;
  count++;
  console.log(count);
}

if(count === 5) {
  document.write("<p>" + count + " CORRECT ANSWERS</p>")
  document.write("<p>GOLD CROWN</p>");
} else if(count === 3 || count === 4) {
  document.write("<p>" + count + " CORRECT ANSWERS</p>")
  document.write('<p>SILVER CROWN</p>');
} else if(count === 1 || count === 2) {
  document.write("<p>" + count + " CORRECT ANSWERS</p>")
  document.write('<p>BRONZE CROWN</p>');
} else {
  document.write("<p>" + count + " CORRECT ANSWERS</p>")
}

