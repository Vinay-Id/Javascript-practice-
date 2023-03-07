const primeChecker = (num) => {
  if (!Number.isInteger(num)) {
    console.log("Please Enter Number");
  } else if (num < 1) {
    console.log("Number Should Be Greater");
  } else {
    let tempArr = [];
    for (let i = 1; i <= num; i++) {
      tempArr.push(num % i == 0);
    }
    let res = tempArr.reduce((acc, curr) => acc + curr, 0);
    if (res == 2) {
      console.log(num, " is a prime number");
    } else {
      console.log(num, " is not a prime number");
    }
  }
};
primeChecker(11);
primeChecker(9);
// for (let p = 1; p <= 100; p++) {
//   primeChecker(p);
// }
