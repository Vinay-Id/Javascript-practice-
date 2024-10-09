function isArmstrongNumber(num) {
    const strNum = num.toString();
    const numDigits = strNum.length;

    const sum = strNum.split('').reduce((acc, digit) => {
        return acc + Math.pow(parseInt(digit), numDigits);
    }, 0);

    return sum === num;
}

const numberToCheck = 153;
if (isArmstrongNumber(numberToCheck)) {
    console.log(`${numberToCheck} is an Armstrong number.`);
} else {
    console.log(`${numberToCheck} is not an Armstrong number.`);
}
