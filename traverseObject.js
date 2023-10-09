let car = {
  Brand: "Bugatti",
  Model: "Divo",
  Type: "sports",
  Engine: "W16",
  TopSpeed: "380kmph",
  Price: "41Cr",
};

for (elem in car) {
  console.log(elem+":"+car[elem]);
}
