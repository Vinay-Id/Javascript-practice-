const swapTwovar = (num1, num2) => ([num1, num2] = [num2, num1]);
console.log(swapTwovar(5, 6));

// swaping 2 variable numbers without using third variable
const swapTwoNum = (x, y) => {
  x = y + x;
  y = x - y;
  x = x - y;

  console.log(x, y);
};
swapTwoNum(22, 33);
