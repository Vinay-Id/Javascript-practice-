function countVowels(str) {
    const vowels = /[aeiouAEIOU]/g;
    const matchedVowels = str.match(vowels);
    return matchedVowels ? matchedVowels.length : 0;
}

const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels in "${inputString}": ${vowelCount}`);
