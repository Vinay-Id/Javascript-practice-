const constantFun = () => {
  const num = 20;
  const arr = ["hello"];
  arr.push("world");
  console.log(num);
  console.log(arr);
  {
    const num = 50;
    console.log(num);
  }
};
constantFun();
