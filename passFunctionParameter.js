const calculaor = (num1, num2, fn) => fn(num1, num2);
const add = (a, b) => console.log(a + b);
const sub = (a, b) => console.log(a - b);
calculaor(5, 6, add);
calculaor(50, 6, sub);
