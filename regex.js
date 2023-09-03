let str = "thisIsTheStringToSplit";
let result = str.split(/(?=[A-Z])/).map(s => s.trim());
console.log(result);