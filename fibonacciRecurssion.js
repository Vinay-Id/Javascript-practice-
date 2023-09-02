const Fibonacci = (num) => {
  //   FibonacciNum = 0;
  if (num <= 1) {
    return num;
  } else {
    let FibonacciNum = Fibonacci(num - 1) + Fibonacci(num - 2);
    return FibonacciNum;
  }
};
console.log(Fibonacci(15));

// recursive sum of pervous num
// const sumOfPreviousNumber = (num) => {
//   let sumNum = 0;
//   if (num == 0) {
//     return sumNum;
//   } else {
//     sumNum = num + sumOfPreviousNumber(num - 1);
//     return sumNum;
//   }
// };
// console.log(sumOfPreviousNumber(5));
// function fibRecursion(n){
//     if(n<2){
//       return n;
//     }
//     let fib=0;

//     else return fibRecursion(n-1)+fibRecursion(n-2)
//   }
