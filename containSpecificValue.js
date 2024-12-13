function containsValue(arr, value) {ray
    if (arr.includes(value)) {
        return `The array contains the value ${value}.`;
    } else {
        return `The array does not contain the value ${value}.`;
    }
}

let myArray = [10, 20, 30, 40, 50];
let valueToCheck = 30;

console.log(containsValue(myArray, valueToCheck)); 
