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

//function with one params
// function getRandomNumber(upper) {
//   var randomNumber = Math.floor( Math.random() * upper ) + 1; 
//   return randomNumber;
// }
// console.log(getRandomNumber(6));

//fuction with multiple params
// function getArea(width, length, unit) {
//   var area = width * length + " " + unit;
//   return area;
// }
// console.log(getArea(10, 20, 'sq ft'));

//random number between two numbers
// function getRandomNumber( lower, upper ) {
//   var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;

//   if( isNaN(lower) || isNaN(upper)) {
//     throw new Error('One of the number is not a number!!!');
//   }

//   return randomNumber;
// }

// console.log( getRandomNumber( 1, 100 ) );
// console.log( getRandomNumber( 'nine', 24 ) );
// console.log( getRandomNumber( 200, 'five hundred' ) );
// console.log( getRandomNumber( 1000, 20000 ) );
// console.log( getRandomNumber( 50, 100 ) );

//Practice

// 1. Attach this file geometry.js to the index.html file

// 2. Create a function that calculates the area of a rectangle.
//    The function should accept the width and height as arguments
//    and return the area of that rectangle.
//    The area of a rectangle is the width * height
function areaRectangle( width, height ){
  var area = width * height;
  if(isNaN(width) || isNaN(height)) {
    throw new Error('One parameter is not a number');
  }
  return area;
}

// 3. Create a function that calculates the volume of a rectangular prism.
//    The function should accept the width, height and length as arguments
//    and return the volume of that rectangular prism.
//    The volume of a rectangular prism is the width * height * length
function volumeRectangularPrism(width, height, length) {
  var volume = width * height * length;
  if(isNaN(width) || isNaN(height) || isNaN(length)) {
    throw new Error('One parameter is not a number')
  }
  return volume;
}

// 4. Create a function that calculates the area of a circle.
//    The function should accept the radius of the circle as an argument
//    and return the area of that circle.
//    The area of a circle is the value of π * radius^2
function areaCircle(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  if(isNaN(radius) || radius < 0) {
    throw new Error('radius must be a number and positive');
  }
  return area;
}


// 5. Create a function that calculates the volume of a sphere.
//    The function should accept the radius of the sphere as an argument
//    and return the volume.
//    The volume of a circle is: 4/3 *  π * radius^3
function volumeSphere(radius) {
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  if(isNaN(radius) || radius < 0) {
    throw new Error('radius must be a number and positive');
  }
  return volume;
}


// 6. Use console.log to test each function and output to the JavaScript console
//    Here are the values to test and the expected results
//    -- Area of rectangle that is 5 wide and 22 tall: 110
//    -- Volume of a rectangular prism that is 4.5 x 12.5 x 17.4: 978.7499999999999
//    -- Area of a circle that with a radius of 7.2: 162.8601631620949
//    -- Volume of a spehere with a radius of 7.2: 1563.4575663561109
console.log(areaRectangle(5, 22));
console.log(volumeRectangularPrism(4.5, 12.5, 17.4));
console.log(areaCircle(7.2));
console.log(volumeSphere(7.2));








