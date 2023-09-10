# JavaScript Cheatsheet

This cheatsheet covers fundamental JavaScript concepts, syntax, and commonly used methods.


## Basic Syntax

### Comments

```javascript
// Single-line comment

/*
   Multi-line
   comment
*/

// Variables
let variableName = value;  // mutable
const constantName = value;  // immutable
```

### Data Types

```javascript
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let arr = [1, 2, 3]; // Array
let obj = { key: "value" }; // Object
let func = function () { }; // Function
```

### Operators

```javascript
let sum = 5 + 3;
let concat = "Hello" + "World";
let isTrue = true && false;
let isEqual = 5 === "5"; // false (strict equality)
```

## Control Structures

```javascript
// Conditional Statements
if (condition) {
    // code to run if condition is true
} else if (anotherCondition) {
    // code to run if anotherCondition is true
} else {
    // code to run if no conditions are true
}

// Loops
for (let i = 0; i < 5; i++) {
    // code to repeat
}

while (condition) {
    // code to repeat while condition is true
}

// Switch Statement
switch (value) {
    case 1:
        // code if value is 1
        break;
    case 2:
        // code if value is 2
        break;
    default:
        // code if value doesn't match any case
}
```

## Functions

```javascript
// Defining a Function
function functionName(parameter1, parameter2) {
    // code to run
    return result;
}

// Calling a Function
let result = functionName(arg1, arg2);

// Arrow Functions (ES6)
const arrowFunction = (param1, param2) => {
    // code to run
    return result;
};
```

## Arrays

```javascript
let fruits = ['apple', 'banana', 'cherry'];

// Accessing Elements
let firstFruit = fruits[0]; // 'apple'

// Modifying Arrays
fruits.push('date'); // Add to end
fruits.pop(); // Remove from end
fruits.shift(); // Remove from start
fruits.unshift('apricot'); // Add to start

// Iterating Arrays
for (let i = 0; i < fruits.length; i++) {
    // code for each element
}

fruits.forEach((fruit) => {
    // code for each element using forEach
});

// Array Methods
let slicedFruits = fruits.slice(1, 3);
let indexOfBanana = fruits.indexOf('banana');
```

## Objects

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

// Accessing Object Properties
let firstName = person.firstName; // "John"
let age = person["age"]; // 30
```

## Strings

```javascript
const str = 'Hello, World!';

// String Methods
const length = str.length;
const char = str.charAt(0);
const substring = str.substring(0, 5);
const fruits = str.split(',');
const startsWithHello = str.startsWith('Hello');
const endsWithWorld = str.endsWith('World');
const containsWorld = str.includes('World');
const replacedStr = str.replace('World', 'Universe');
const trimmedStr = str.trim();
const upper = str.toUpperCase();
const lower = str.toLowerCase();
```

### ES6 Modules (import/export)

```javascript
// Exporting in a module
export const myVar = 42;
export function myFunction() { }

// Importing in another module
import { myVar, myFunction } from './myModule';
```

### ES6 Classes and Inheritance

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        // Define a method
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    makeSound() {
        // Override the parent class method
    }
}
```

### Promises (ES6)

```javascript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Asynchronous code here
        if (/* Successful condition */) {
            resolve(data);
        } else {
            reject(error);
        }
    });
};

fetchData()
    .then((data) => {
        // Handle success
    })
    .catch((error) => {
        // Handle error
    });
```

### Asynchronous Programming

#### Callbacks

```javascript
function fetchData(callback) {
    // Asynchronous operation
    callback(data);
}

fetchData((data) => {
    // Handle data
});
```

#### Async/Await (ES8)

```javascript
async function fetchData() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        // Handle data
    } catch (error) {
        // Handle error
    }
}

fetchData();
```

### Local Storage (Web Storage API)

```javascript
// Storing data
localStorage.setItem('key', 'value');

// Retrieving data
let data = localStorage.getItem('key');

// Removing data
localStorage.removeItem('key');
```

### DOM Manipulation

```javascript
// Selecting Elements
let element = document.getElementById('myId');
let elements = document.querySelectorAll('.myClass');

// Modifying Elements
element.innerHTML = 'New content';
element.style.color = 'blue';

// Event Handling
element.addEventListener('click', () => {
    // Handle click event
});
```

### Error Handling

#### Try...Catch

```javascript
try {
    // Code that may throw an error
} catch (error) {
    // Handle the error
}
```

### Event Handling

#### Event Listeners

```javascript
document.getElementById('myButton').addEventListener('click', (event) => {
    // Handle the click event
});
```Certainly! Here's a continuation of the `README.md` file, covering additional topics and concepts:

```markdown
## ES6+ Features

### Destructuring

```javascript
const { firstName, lastName } = person;
const [first, second] = [1, 2];
```

### Spread Operator

```javascript
const newArray = [...oldArray];
const newObj = { ...oldObj };
```

### Template Literals

```javascript
const name = 'John';
const greeting = `Hello, ${name}!`;
```

### Default Parameters

```javascript
function greet(name = 'Guest') {
    // Use default if name is not provided
}
```

### Rest Parameters

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
```

## Functional Programming

### Map, Filter, Reduce

```javascript
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => num * 2); // [2, 4, 6]
const even = numbers.filter((num) => num % 2 === 0); // [2]
const sum = numbers.reduce((total, num) => total + num, 0); // 6
```

### Higher-Order Functions

```javascript
const multiplyBy = (factor) => (num) => num * factor;

const double = multiplyBy(2);
const triple = multiplyBy(3);
```

## Web APIs

### Fetch API

```javascript
fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => {
        // Handle data
    })
    .catch((error) => {
        // Handle error
    });
```

### Closures

```javascript
function outer() {
    let outerVar = 'I am from outer function';
    
    function inner() {
        console.log(outerVar);
    }

    return inner;
}

const closureFunc = outer();
closureFunc(); // Outputs: 'I am from outer function'
```

### Promises Chaining

```javascript
async function fetchData() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

fetchData()
    .then((data) => {
        // Handle data
    })
    .catch((error) => {
        // Handle error
    });
```

### Object Destructuring

```javascript
const person = { name: 'John', age: 30 };
const { name, age } = person;
```

### Spread Operator in Objects

```javascript
const defaults = { width: 100, height: 100 };
const options = { ...defaults, color: 'blue' };
```

### Class Properties (ES6)

```javascript
class Car {
    make = '';
    model = '';

    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
```

### String Interpolation (Template Strings)

```javascript
const name = 'Alice';
console.log(`Hello, ${name}!`);
```


