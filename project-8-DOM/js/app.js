/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
// const myHeading = document.getElementsByTagName('h1')[0];
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');

// myButton.addEventListener('click', () => {
//   myHeading.style.color = myTextInput.value;
// });

// const myList = document.getElementsByTagName('li');

// for (let i = 0; i < myList.length; i++) {
//   myList[i].style.color = 'purple';
// }

// get element by class name
// const errorNotPurple = document.getElementsByClassName('error-not-purple');

// for (let i = 0; i < errorNotPurple.length; i++) {
//   errorNotPurple[i].style.color = 'red';
// }

// const errorNotPurple = document.querySelectorAll('.error-not-purple');

// for (let i = 0; i < errorNotPurple.length; i++) {
//   errorNotPurple[i].style.color = 'red';
// }

// const evens = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < evens.length; i++) {
//   evens[i].style.backgroundColor = 'lightgray';
// }

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {
  // eslint-disable-next-line eqeqeq
  if (listDiv.style.display == 'none') {
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide list';
  } else {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
  }
});

descriptionButton.addEventListener('click', () => {
  // p.textContent = input.value + ':';
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

// hover over the paragraph to find out
// p.title = "List description"

addItemButton.addEventListener('click', () => {
  const ul = document.getElementsByTagName('ul')[0];
  const li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  const ul = document.getElementsByTagName('ul')[0];
  const li = document.querySelector('li:last-child');
  ul.removeChild(li);
});