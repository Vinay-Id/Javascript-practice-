const keyExistOnObj = (key, obj) =>
  key in obj
    ? `${key} is present in object`
    : `${key} is not present in object`;
let car = {
  Brand: "Bugatti",
  Model: "Divo",
  Type: "sports",
  Engine: "W16",
  TopSpeed: "380kmph",
  Price: "41Cr",
};
console.log(keyExistOnObj("Model", car));
console.log(keyExistOnObj("Gears", car));

//second method
const objKeyExist = (key, obj) =>
  obj.hasOwnProperty(key)
    ? `${key} is present in object`
    : `${key} is not present in object`;

console.log(objKeyExist("Price", car));
console.log(objKeyExist("speed", car));
