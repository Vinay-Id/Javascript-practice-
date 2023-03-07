// find square root with Math.sqrt
function sqRoot(num) {
  return Math.sqrt(num);
}
let sqNo = 81;
console.log("the sqare root of " + sqNo + " is " + sqRoot(sqNo));

// find square root
const squareroot = (sq) => {
  let num = 1;
  while (num * num != sq && num * num <= sq) {
    num++;
  }
  if (num * num == sq) {
    console.log("The sqaure root of " + sq + " is " + num);
  } else {
    console.log("no square root found for " + sq);
  }
};
squareroot(36);
