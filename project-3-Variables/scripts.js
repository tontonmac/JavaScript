var message = 'Hello!';
// alert(message);
message = 'Welcome to JavaScript Basics';
// alert(message);
// var visitorName = prompt('What is your name?');
// alert(visitorName);
// console.log(visitorName);

// var visitor = prompt('What is your name?');
// message = 'Hello ' + visitor + ". Welcome to Treehouse.";
// message += 'We are so glad that you came by to visit, ';
// message += visitor;
// message += '. Please come again, when you want to learn some more.';
// document.write(message);

// var  passPhrase = 'Open Sesame';
// console.log(passPhrase.length);
// console.log(passPhrase.toLocaleLowerCase());
// console.log(passPhrase.toUpperCase());

// var stringToShout = prompt("what should i shout");
// var shout = stringToShout.toUpperCase();
// shout += "!!!";
// alert(shout);

// THE STORY MAKING GAME
// var message = prompt("what do you like to do for fun?");
// var response = "<h2>You like " + message;
// message = prompt('what sport do you play?');
// response +=  " and playing " + message;
// document.write(response);
// alert("that is it for today. Come back tomorrow.");

// PRACTICE
// var firstName = prompt('what is your first name?');
// var lastName = prompt('what is your last name?');
// alert('The string \"' + (firstName +' '+ lastName).toUpperCase() + '\"'+ ' is ' + (firstName +' '+ lastName).length + ' characters long.');

//PRACTICE VARIABLES

// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;

// document.write('There are ' + secondsPerDay + ' seconds in a day </br>');

// var yearsAlive = 18;
// var secondsPerYear = secondsPerDay * daysPerWeek * weeksPerYear;

// document.write('I have been alive  for ' + secondsPerYear * yearsAlive + ' seconds' );


//STORY EXERCISE

// var questions = 3;
// var questionsLeft = ' [' + questions + ' questions left]';
// var adjective = prompt('Please type an adjective' + questionsLeft);
// questions -= 1;
// questionsLeft = ' [' + questions + ' questions left]';
// var verb = prompt('Please type a verb' + questionsLeft);
// questions -= 1;
// questionsLeft = ' [' + questions + ' questions left]';
// var noun = prompt('Please type a noun' + questionsLeft);
// alert('All done. Ready for the message?');
// var sentence = "<h2>There once was a " + adjective;
// sentence += ' programmer who wanted to use JavaScript to ' + verb;
// sentence += ' the ' + noun + '.</h2>';
// document.write(sentence);

// MATH OBJECT
// alert(Math.round(2.2));
// alert(Math.round(4.6));

// RANDOM - generate random numbe from 0 to 1
// Math.random();

// // get any number from 0 to 6
// Math.random() * 6;

// // get any number from 1 to 6 integer
// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert('You rolled ' + dieRoll);

// CHALLENGE
var rand = Math.random();
var rand2 = Math.random();
var userNum = prompt("Enter a number");
// var userNum2 = prompt('Enter another number');
var intNum = parseInt(userNum);
// var intNum2 = parseInt(userNum2);
var num = Math.floor(rand * intNum) + 1;
document.write(num);
