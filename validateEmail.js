function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return emailPattern.test(email);
}

const emailToTest = "example@example.com";
if (validateEmail(emailToTest)) {
    console.log(`${emailToTest} is a valid email address.`);
} else {
    console.log(`${emailToTest} is not a valid email address.`);
}
