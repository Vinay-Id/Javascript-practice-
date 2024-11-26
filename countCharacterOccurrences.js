function countCharacterOccurrences(str, char) {
  const occurrences = str.split("").filter((c) => c === char);

  return occurrences.length;
}

const string = "hello world";
const character = "o";
const count = countCharacterOccurrences(string, character);
console.log(
  `The character '${character}' appears ${count} times in the string "${string}".`
);
