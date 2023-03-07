const multiplicationTab = (num) => {
  if (Number.isInteger(num)) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} X ${i} = ${i * num}`);
    }
  } else {
    console.log(`Please Enter Number`);
  }
};
multiplicationTab(999);

