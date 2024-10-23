function replaceLineBreaks(inputString, replacement) {
    return inputString.replace(/(\r\n|\n|\r)/g, replacement);
}

const originalString = "Hello,\nWorld!\r\nThis is a test.\rLet's replace line breaks.";
const replacedString = replaceLineBreaks(originalString, ' ');
console.log(replacedString);
