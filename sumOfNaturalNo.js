const naturalNo = (n) => {
  let Num = 0;
  for (let i = 1; i <= n; i++) {
    Num += i;
  }
  console.log(`the sum of natural number ${n} is ${Num}`);
};
naturalNo(20);
