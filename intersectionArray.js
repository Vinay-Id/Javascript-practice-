function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((element) => set2.has(element));
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
let result = intersection(array1, array2);

console.log(result);
