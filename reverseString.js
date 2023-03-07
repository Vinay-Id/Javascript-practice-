const reverseString = (str) => str.split(" ").reverse().join().replaceAll(","," ");
let strRev = "R U checking my code 😁 ";
console.log(`Orginal string is: ${strRev}`);
console.log(`Reversed string is:${reverseString(strRev)}`);
