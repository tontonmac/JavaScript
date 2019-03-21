var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}

for (i = 0; i < 10; i += 1) {
  red = randomRGB();
  green = randomRGB();
  blue = randomRGB();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}
print(html);