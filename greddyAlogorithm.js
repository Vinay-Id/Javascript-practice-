function NumberOfMoneyUse(amount) {
  const money = [100, 20, 10, 1, 5, 0.25, 0.5, 0.1, 0.01];
  money.sort((a, b) => b - a);
  console.log(money);
  let count = 0;
  for (let i = 0; i < money.length; i++) {
    while (amount >= money[i]) {
      amount -= money[i];
      count++;
    }
  }
  return count;
}
console.log(NumberOfMoneyUse(215));
