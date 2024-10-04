function checkNumberType(num) {
    if (typeof num !== 'number') {
        return "Input is not a number";
    }
    
    if (Number.isInteger(num)) {
        return `${num} is an Integer.`;
    } else {
        return `${num} is a Float.`;
    }
}

console.log(checkNumberType(10));  
console.log(checkNumberType(10.5)); 
console.log(checkNumberType(-3)); 
console.log(checkNumberType(-2.8)); 
console.log(checkNumberType("Hello")); 
