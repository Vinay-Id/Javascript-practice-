const checkPalindrome=(str)=>str.split().reverse().join()==str?`${str} is a palindrome`:`${str} is not a palindrome`
console.log( checkPalindrome('tenet'));
console.log( checkPalindrome('noon'));
console.log( checkPalindrome('morning'));

