// function alertRandom() {
//   var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
//   alert(randomNumber);
// }
// alertRandom();

// function getRandomNumber() {
//   var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
//   return randomNumber;
// }
// document.write("<h1>"+getRandomNumber()+"</h1>");

//after return, the function exit, the next line wont appear.
// function noAlert() {
//   return 3;
//   alert('this will not appear');
// }

function getRandomNumber(upper) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}
console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(10000));
console.log(getRandomNumber(50));