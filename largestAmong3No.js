const largestNo = (num1, num2, num3) =>
  num1 > num2 && num1 > num3
    ? `${num1} is Largest Number`
    : num2 > num1 && num2 > num3
    ? `${num2} is Largest Number`
    : `${num3} is Largest Number`;
console.log(largestNo(4, 5, 9));
console.log(largestNo(14, 5, 9));
console.log(largestNo(4, 15, 9));
