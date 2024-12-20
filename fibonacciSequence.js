function fibonacci(n) {
    if (n <= 1) {
        return n; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function displayFibonacciSequence(n) {
    for (let i = 0; i < n; i++) {
        console.log(fibonacci(i)); 
    }
}

let n = 10;
displayFibonacciSequence(n);
