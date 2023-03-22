//JavaScript Program to Merge Two Arrays and Remove Duplicate Items with for...of loop
// const removeDuplicate = (arr1, arr2) => {
//   let arr = [...arr1, ...arr2];
//   let tempArr = [];
//   for (let elem of arr) {
//     if (!tempArr.includes(elem)) {
//       tempArr.push(elem);
//     }
//   }
//   return tempArr;
// };
// -------------------------------------------------------------------------------------------

//JavaScript Program to Merge Two Arrays and Remove Duplicate Items with forEach loop
const removeDuplicate = (arr1, arr2) => {
  let tempArr = [];
  let arr = [...arr1, ...arr2].forEach((elem) => {
    if (!tempArr.includes(elem)) {
      tempArr.push(elem);
    }
  });
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
];
let brands2 = ["mahindra", "mercedes", "tata"];
console.log(removeDuplicate(brands, brands2));
