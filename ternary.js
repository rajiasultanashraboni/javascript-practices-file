var age = 20;
// if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("ghumai thako");
// }

// age >= 18 ? console.log("you can vote") : console.log("ghumai thako");

let price = 500;
let isLeader = false;

if (isLeader === true) {
  price = 0;
} else {
  price = price + 100;
}

console.log(price);

price = isLeader === true ? 0 : price + 100;
