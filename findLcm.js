// Function to find the Greatest Common Divisor (GCD) using Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  // Function to find the Least Common Multiple (LCM)
  function lcm(a, b) {
    // LCM formula: (a * b) / GCD(a, b)
    return (a * b) / gcd(a, b);
  }
 
  let num1 = 15;
  let num2 = 20;
  console.log(`LCM of ${num1} and ${num2} is: ${lcm(num1, num2)}`);
  