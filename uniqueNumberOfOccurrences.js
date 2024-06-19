
var uniqueOccurrences = function (arr) {
  let numObj = {};
  for (let num of arr) {
    if (numObj[num]) {
      numObj[num] = numObj[num] + 1;
    } else {
      numObj[num] = 1;
    }
  }
console.log(numObj);
  let valuesArr = Object.values(numObj).sort();
console.log(valuesArr);
  for (let i = 1; i < valuesArr.length; i++) {
    if (valuesArr[i] === valuesArr[i - 1]) {
      return false;
    }
  }

  return true;
};

let arr = [5, 1, 2, 2, 1, 1, 3, 4];
console.log(uniqueOccurrences(arr));



// var uniqueOccurrences = function (arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//       if (!obj.hasOwnProperty(arr[i])) {
//         obj[arr[i]] = 1;
//       } else {
//         obj[arr[i]] = obj[arr[i]] + 1;
//       }
//       // console.log(obj);
//     }
//     let valuesArr = Object.values(obj).sort();
//     return [...new Set(valuesArr)].length != 1;
//   };
//   let arr = [5, 1, 2, 2, 1, 1, 3, 4];
//   uniqueOccurrences(arr);