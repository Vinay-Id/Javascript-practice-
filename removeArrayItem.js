function removeArrayItem(arr, item) {
//   arr.splice(arr.indexOf(item), 1);
//   return arr;
  return arr.filter((elem)=>elem!=item)
}
console.log(removeArrayItem([1,2,3,4,5],3))