// find factorial
const factorial = (factoNum) => {
  let tempArr = [];
  for (let i = factoNum; i >= 1; i--) {
    tempArr.push(i);
  }
  if (factoNum < 1) {
    return "Please enter positive number";
  } else if (isNaN(factoNum)) {
    return "please enter valid number";
  } else {
    return `the factorial of ${factoNum} is ${tempArr.reduce((acc, curr) => acc * curr,1)}`;}
};
console.log(factorial(4));
