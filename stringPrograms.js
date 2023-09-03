// Get nth character of string

// function myFunction(a, n) {
//   console.log(a[n - 1]);
// }
// myFunction("abcd", 1);
// //Expected 'a'
// myFunction("zyxbwpl", 5);
// //Expected'w'
// myFunction("gfedcba", 3);
// //Expected'e'

// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

// function myFunction(a) {
//   return a.slice(3);
// }
// myFunction("abcdefg");

// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

// function myFunction(str) {
//   return str.slice(-3);
// }
// myFunction("abcdefg"); //Expected'efg'

// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

// function myFunction(a) {
//   return a.slice(0, 3);
// }
// myFunction("abcdefg"); //Expected 'abc'

// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
// function myFunction(a) {
//   return a.indexOf("is");
// }
// myFunction("praise"); //Expected 3

// Write a function that takes a string (a) as argument. Extract the first half a. Return the result

// function myFunction(a) {
//   console.log(a.slice(0, a.length / 2));
// }
// myFunction("abcdefgh"); //Expected'abcd'
// myFunction("1234");
// myFunction("gedcba");

// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

// function myFunction(a) {
//   return a.slice(0, -3);
// }
// myFunction("abcdefg");

// Write a function that takes two numbers (a and b) as argument. Return b percent of a

// function myFunction(a, b) {
//   return (b * 100) / a;
// }

// myFunction(100, 50); //Expected 50

function myFunction(a, b) {
  a.splice(Number(b-1) , 1);
  console.log(a);
}

myFunction([1, 2, 3], 2);
myFunction([1, 2, "2"], "2");

myFunction([false, "2", 1], false);

myFunction([1, 2, "2", 1], 1);
