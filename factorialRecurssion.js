const factorial = (num) => {
    if(num!==1){
        return num*factorial(num-1)
    }
    return num
};
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(10));


