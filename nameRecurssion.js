const nameRecurssion = (name, num) => {
  if (num <= 0) {
    return;
  } else {
    console.log(name);
  }
  nameRecurssion(name, num - 1);
};
nameRecurssion("vinay", 7);
