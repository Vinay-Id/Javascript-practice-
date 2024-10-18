function sumOfNaturalNumbers(n) {
    if (n === 0) {
        return 0;
    }
    return n + sumOfNaturalNumbers(n - 1);
}

const number = 5; 
const result = sumOfNaturalNumbers(number);
console.log(`The sum of natural numbers up to ${number} is: ${result}`);
