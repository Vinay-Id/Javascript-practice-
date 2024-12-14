function solveQuadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`The roots are real and different: ${root1} and ${root2}`);
    }
    else if (discriminant === 0) {
        let root = -b / (2 * a);
        console.log(`The roots are real and the same: ${root}`);
    }
    else {
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        console.log(`The roots are complex: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`);
    }
}

let a = 1;
let b = -3;
let c = 2;

solveQuadratic(a, b, c);
