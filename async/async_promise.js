let stocks = {
  Fruits: ["strawberry", "banana", "apple", "mango"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () =>
      console.log("order is recieved.starting icecream production")
    );
  })
  .then(() => {
    return order(2000, () => {
      return console.log("fruit has been chopped");
    });
  })
  .then(() => {
    return order(1000, () => {
      return console.log(
        `${stocks.liquid[0]} and ${stocks.liquid[1]} was added`
      );
    });
  })
  .then(() => {
    return order(3000, () => {
      return console.log("machine was started");
    });
  })
  .then(() => {
    return order(0, () => {
      return console.log(`ice cream was placed on ${stocks.holder[0]}`);
    });
  })
  .then(() => {
    return order(3000, () => {
      return console.log(`${stocks.toppings[0]} was added as topping`);
    });
  })
  .then(() => {
    return order(1000, () => {
      return console.log("serve the ice creame");
    });
  }).catch(()=>console.log('customer left')).finally(()=>console.log('day ended shop is closed'))
