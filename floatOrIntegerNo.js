function isFloatOrInteger(num) {
  if (num === Math.floor(num)) {
    console.log(num + " is an integer");
  } else {
    console.log(num + " is an float");
  }
}

isFloatOrInteger(5);
isFloatOrInteger(3.1);
isFloatOrInteger(9);
isFloatOrInteger(10.2);
