//https://www.youtube.com/watch?v=ZYb_ZU8LNxs
let stocks = {
  Fruits: ["strawberry", "banana", "apple", "mango"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;

async function order() {
  try {
  } catch (error) {
    console.log();
  } finally {
    console.log("run any way");
  }
}
// let topping_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping do you want?"));
//     }, 3000);
//   });
// };
// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");
//   await topping_choice();
//   console.log("D");
//   console.log("E");
// }
// kitchen();
// console.log("cleaning the dishes");
// console.log("cleaning the table");
// console.log("taking the order");

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}
async function kitcken() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);
    await time(0);
    console.log("order is recieved.starting icecream production");
    await time(3000);
    console.log("fruit has been chopped");
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    await time(2000);
    console.log("machine was started");
    await time(0);
    console.log(`ice cream was placed on ${stocks.holder[0]}`);
    await time(1000);
    console.log(`${stocks.toppings[0]} was added as topping`);
    await time(2000);
    console.log("serve the ice creame");
  } catch (error) {
    console.log("customer left ", error);
  } finally {
    console.log("day ended shop is closed");
  }
}
kitcken();
