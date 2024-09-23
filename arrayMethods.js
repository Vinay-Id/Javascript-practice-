let numbers = [1, 2, 3, 4, 5];

console.log("Original array:", numbers);

numbers.push(6);
console.log("After push(6):", numbers);

let popped = numbers.pop();
console.log("After pop():", numbers, "- Popped value:", popped);

let shifted = numbers.shift();
console.log("After shift():", numbers, "- Shifted value:", shifted);

numbers.unshift(0);
console.log("After unshift(0):", numbers);

let doubled = numbers.map((num) => num * 2);
console.log("Doubled array:", doubled);

let filtered = numbers.filter((num) => num > 3);
console.log("Filtered array (values > 3):", filtered);

let sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log("Sum of array:", sum);

let sliced = numbers.slice(1, 4);
console.log("Sliced array (index 1 to 3):", sliced);

numbers.splice(2, 1, 10);
console.log("After splice(2, 1, 10):", numbers);
