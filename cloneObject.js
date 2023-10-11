const { number } = require("prop-types");

const obj1 = { name: "john", num: [1, 2, 3] };
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = "sara";
obj2.num.push(5);
console.log(obj1);
console.log(obj2);

function cloneObject(obj) {
  return { ...obj };
}

const originalObject = { name: "John", age: 30, city: "New York" };
const clonedObject = cloneObject(originalObject);

console.log("Original Object:", originalObject);
console.log("Cloned Object:", clonedObject);
