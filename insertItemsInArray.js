function insertItem(array, index, item) {
  array.splice(index, 0, item);
}

let myArray = [1, 2, 3, 4, 5];

insertItem(myArray, 2, "new item");

console.log(myArray);
