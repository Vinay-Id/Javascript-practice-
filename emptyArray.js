const emptyArray = (arr) => {
  var len = arr.length;
  for (let i = 1; i <= len; i++) {
    arr.pop();
  }
};
let brands = ["rols royce", "bugatti", "ferrari", "lamborghini", "land rover"];
console.log(brands);
emptyArray(brands);
console.log(brands);
