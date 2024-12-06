function replaceCharacter(str, target, replacement) {
    return str.replace(new RegExp(target, 'g'), replacement);
  }
  
  const originalString = "Hello World!";
  const characterToReplace = "o";
  const replacementCharacter = "0";
  
  const newString = replaceCharacter(originalString, characterToReplace, replacementCharacter);
  console.log(newString); 
  