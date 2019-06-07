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
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';


// const removeItemButton = document.querySelector('button.removeItemButton');

// listDiv.addEventListener('mouseover', (event) => {
//   if (event.target.tagName == 'LI') {
//     event.target.textContent = event.target.textContent.toUpperCase();
//   }
// });

// listDiv.addEventListener('mouseout', (event) => {
//   if (event.target.tagName == 'LI') {
//     event.target.textContent = event.target.textContent.toLocaleLowerCase();
//   }
// });

function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', event => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});

toggleList.addEventListener('click', () => {
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
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});

// removeItemButton.addEventListener('click', () => {
//   const ul = document.getElementsByTagName('ul')[0];
//   const li = document.querySelector('li:last-child');
//   ul.removeChild(li);
// });
