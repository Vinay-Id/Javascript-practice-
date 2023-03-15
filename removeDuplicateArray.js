const removeDuplicate = (arr) => {
  var tempArr = [];
  for (let elem of arr) {
    if (tempArr.includes(elem)) {
      arr.pop(elem);
    } else {
      tempArr.push(elem);
    }
  }
  return tempArr;
};
let brands = [
  "rolls royce",
  "bugatti",
  "tata",
  "ferrari",
  "lamborghini",
  "land rover",
  "ferrari",
  "mahindra",
  "tesla",
  "tata",
  "mahindra",
];
console.log(removeDuplicate(brands));
