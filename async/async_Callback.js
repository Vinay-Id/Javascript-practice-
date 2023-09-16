// console.log("i ");
// console.log("eat");
// setTimeout(() => {
//   console.log("ice cream");
// }, 4000);
// console.log("with a");
// console.log("spoon");

//callback
// function one(call_two) {
//   console.log("step 1 completed please call step 2");
//   call_two();
// }
// function two() {
//   console.log("step 2");
// }
// one(two);
// // two();
let stocks = {
  Fruits: ["strawberry", "banana", "apple", "mango"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// console.log(stocks["Fruits"][1]);
// console.log(stocks.Fruits[stocks.Fruits.length - 1]);

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
  //   console.log("order is placed. time for icecream production");
};
//call back hell
let production = () => {
  setTimeout(() => {
    console.log("order is recieved.starting icecream production");
    setTimeout(() => {
      console.log("fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[0]} was added`);
        setTimeout(() => {
          console.log("machine was started");
          setTimeout(() => {
            console.log(`icream was placed on ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as topping`);
              setTimeout(() => {
                console.log("serve the ice creame");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
  //   console.log("order is recieved.starting icecream production");
};
order(0, production);
