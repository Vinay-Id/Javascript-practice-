basicBacktraning = (arr) => {
  let output = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      output.push(...(arr[j] + arr[i]));
    }
  }
  return output;
};
console.log(basicBacktraning([1, 2, 3]));
