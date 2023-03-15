const currDate = () => {
  let dateIs = new Date().toLocaleDateString();
  //   let toDaysDate=new Date().getDate()
  return console.log(`Todays date is ${dateIs}`);
};
currDate();
