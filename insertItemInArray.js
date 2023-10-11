function insertItemUsingSplice(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}
console.log(insertItemUsingSplice([1, 2, 3, 4], 10, 2));


// function insertItemUsingSplice(arr, item, index) {
//     arr.splice(index, 0, item);
//     return arr;
//   }
  
//   const originalArray = [1, 2, 3, 4, 5];
//   const newItem = 10;
//   const indexToInsert = 2;
  
//   const modifiedArray = insertItemUsingSplice(originalArray, newItem, indexToInsert);
//   console.log(modifiedArray);
  