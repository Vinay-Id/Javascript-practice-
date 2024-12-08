function splitArrayIntoChunks(array, chunkSize) {
  let result = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const chunks = splitArrayIntoChunks(inputArray, chunkSize);

console.log(chunks);
