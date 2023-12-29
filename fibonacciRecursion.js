function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function displayFibonacciSequence(count) {
  for (let i = 0; i < count; i++) {
    console.log(fibonacci(i));
  }
}

const count = 10;
console.log(`Fibonacci Sequence (first ${count} numbers):`);
displayFibonacciSequence(count);
