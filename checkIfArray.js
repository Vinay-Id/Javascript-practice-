function checkIfArray(obj) {
    return Array.isArray(obj);
}

const array1 = [1, 2, 3];
const notArray = { key: 'value' };
const array2 = ['a', 'b', 'c'];

console.log(checkIfArray(array1)); 
console.log(checkIfArray(notArray));
console.log(checkIfArray(array2)); 
