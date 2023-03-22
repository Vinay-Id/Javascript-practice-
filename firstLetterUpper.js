const upperLetter = (str) => {
  let firstLetter = str.slice(0, 1).toUpperCase();
  console.log(firstLetter + str.slice(1));
};
let mystr = "hello guys";
upperLetter(mystr);
