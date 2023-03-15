//----------------------------------------by using higher order fn-------------------------------------------
const calculator = (num1, num2, operator) => operator(num1, num2);
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

console.log("Higher function : ",calculator(5, 8, add));
console.log("Higher function : ",calculator(15, 8, subtract));
//---------------------------------------------by using eval-------------------------------------------------
const evalCalculator = (num1, num2, operator) => eval(num1 + operator + num2);
  console.log("Eval : ",evalCalculator(140,70,"/"));
//---------------------------------------------by using switch-----------------------------------------------
const switchCalculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return "no operation found for calculation";
  }
};

console.log("Switch case calculator : ",switchCalculator(15, 8, "+"));
console.log("Switch case calculator : ",switchCalculator(5, 8, "*"));
