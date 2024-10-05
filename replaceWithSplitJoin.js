function replaceWithSplitJoin(str, oldChar, newChar) {
    return str.split(oldChar).join(newChar);
}

const originalString = "Hello World!";
const modifiedString = replaceWithSplitJoin(originalString, 'o', '0');
console.log(modifiedString); 
