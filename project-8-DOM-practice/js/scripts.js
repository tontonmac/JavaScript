// 1: Set the text of the <h1> element
const h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "My activities list";

// 2: Set the color of the <h1> to a different color
h1.style.color = "blue";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.querySelector('.desc');
desc.innerHTML = "My <em>personal</em> hobby list";

// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.className = 'list';

// 5: Create a new list item and add it to the <ul>
const li = document.createElement('li');
li.innerHTML = "<input> Eat Ice Cream";
ul.appendChild(li);

// 6: Change all <input> elements from text fields to checkboxes
var input = document.getElementsByTagName("input");
for (let i = 0; i < input.length; i++) {
  // input[i].setAttribute("type", "checkbox");
  input[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
// const extra = document.getElementsByClassName("extra")[0];
const extra = document.querySelector('.extra');
extra.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector('.container');
deleteButton.addEventListener("click", () => {
  // extra.style.display = "none";
  container.removeChild(extra);
});
