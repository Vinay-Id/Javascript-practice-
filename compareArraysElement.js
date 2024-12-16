function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];
const array3 = [1, 2, 4, 3];

console.log(compareArrays(array1, array2)); // true
console.log(compareArrays(array1, array3)); // false
