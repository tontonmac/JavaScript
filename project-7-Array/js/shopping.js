var shoppingList = [
  'carrots',
  'milk', 
  'eggs',
  'bread'
];
// print array by index number
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);
console.log(shoppingList[3]);

// add 'butter' to the end of the list
shoppingList[shoppingList.length] = 'butter';
console.log(shoppingList[4]);

// add 'sugar', cream, and honey to the end of the list
shoppingList.push('sugar', 'cream', 'honey');
console.log(shoppingList[5]);
console.log(shoppingList[6]);
console.log(shoppingList[7]);

// add element at the begining of an array
shoppingList.unshift('apple');
console.log(shoppingList[0]);

console.log(shoppingList)


