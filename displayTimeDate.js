const DateTime = () => {
  let dateIs = new Date().toLocaleDateString();
  let timeIs = new Date().toLocaleTimeString();
  return console.log(`Todays date is ${dateIs} and time is ${timeIs}`);
};
DateTime();
