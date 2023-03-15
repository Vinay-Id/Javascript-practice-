const primeChecker = (low, high) => {
  for (let num = low; num <= high; num++) {
    if (!Number.isInteger(num)) {
      console.log("Please Enter Number");
    } else if (num < 1) {
      console.log("Number Should Be Greater");
    } else {
      let tempArr = [];
      for (let i = 2; i < num; i++) {
        tempArr.push(num % i == 0);
      }

      if (tempArr.includes(true) || num == 1) {
        // console.log(num, " is not a prime number");
      } else {
        console.log(num, " is a prime number");
      }
    }
  }
};
primeChecker(1, 100);
