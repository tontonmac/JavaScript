function print(message){
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var student = [
  {name: 'john', track: 'IOS', achievement: 1234, point: 21},
  {name: 'mike', track: 'Web Design', achievement: 4321, point: 12},
  {name: 'susan', track: 'Front End', achievement: 5432, point: 15},
  {name: 'andy', track: 'IOS', achievement: 43545, point: 43},
  {name: 'bob', track: 'Web Design', achievement: 5667, point: 15}
];


function getStudentInfo(students) {
  var report = '<h2>Student: ' + students.name + '</h2>';
  report += '<Promise>Track: ' + students.track + '</Promise>';
  report += '<p>Achievement: ' + students.achievement + '</p>';
  report += '<p>Point: ' + students.point + '</p>';
  return report;
}

var message = '';
var students;
var search;

while(true) {
  search = prompt('search student by name or type q to exit');
  if(search.toLocaleLowerCase() === 'q' || search === null) {
    break;
  }
  for(var i = 0; i < student.length; i++) {
    students = student[i];
    if (search === students.name) {
      message = getStudentInfo(students);
      print(message);
    } 
  }
}