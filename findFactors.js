function findFactors(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

const num = 28; 
const factors = findFactors(num);
console.log(`Factors of ${num} are: ${factors.join(', ')}`);
