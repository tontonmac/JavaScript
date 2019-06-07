// Object litteral
var person = {
  name: 'Sarah',
  country: 'US',
  age: 35,
  student: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('listDiv');
  div.innerHTML = message;
}

var message = '<p>Hello, My name is ' + person.name + '.</p>';
message += '<p>I live in the ' + person.country + '.</p>';
person.name = 'Rainbow Dash';
message += '<p>But, I wish my name was ' + person.name + '.</p>';
message += '<p>My age is  now ' + person.age + '</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '</p>';
print(message);


//for in loop
for (var key in person) {
  console.log(key, ': ', person[key]);
}