const addElem = (arr, elem) => arr.unshift(elem);
let brands = ["rolls royce", "bugatti", "ferrari", "lamborghini", "land rover"];
console.log("Before adding element ",brands);
addElem(brands, "tesla");
console.log("After adding element ",brands);
