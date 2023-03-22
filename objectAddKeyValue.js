const keyValue = (obj, objKey, val) => {
  obj[objKey] = val;
  return obj;
};
let cars = {
  brand: "Bugatti  ",
  model: "centodieci",
};
console.log(keyValue(cars, "engine", "W16"));
console.log(keyValue(cars, "color", "white"));
