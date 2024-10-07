function compareStrings(str1, str2) {
    if (str1 === str2) {
        return "The strings are equal.";
    } else {
        return "The strings are not equal.";
    }
}

console.log(compareStrings("hello", "hello")); 
console.log(compareStrings("hello", "world")); 
