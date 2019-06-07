function print(message) {
  document.write(message);
  // var outputDiv = document.getElementById('output');
  // outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (let i = 0; i < arr.length; i++) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>'
}

var data = [
  ['How many states are in the United States?', 50],
  ['How many legs does an insect have?', 4],
  ['How many continent are they?', 7]
];

var answer, counter = 0,
  correct = [],
  incorrect = [];

var listCorrect = '<ol>';
var listIncorrect = '<ol>';

for (var i = 0; i < data.length; i++) {
  answer = prompt(data[i][0]);

  if (answer === 'q') {
    break;
  } else if (parseInt(answer) === data[i][1]) {
    correct.push(data[i][0]);
    counter++;
  } else {
    incorrect.push(data[i][0]);
  }
}
print('<p> You got ' + counter + ' question(s) right </p>');
print('<p>you got these questions correct:</p>');
for (var i = 0; i < correct.length; i++) {
  listCorrect += "<li>" + correct[i] + "</li>";
}
listCorrect += '</ol>';
print(listCorrect);

print('<p>you got these questions wrong:</p>');
for(var i=0; i< incorrect.length; i++){
  listIncorrect += "<li>" + incorrect[i] + "</li>";
}
listIncorrect += '</ol>';
print(listIncorrect);