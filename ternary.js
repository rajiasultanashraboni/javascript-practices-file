var age = 20;
// if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("ghumai thako");
// }

// age >= 18 ? console.log("you can vote") : console.log("ghumai thako");

let price = 2000;
let isLeader = false;

if (isLeader === true) {
  price = 0;
} else {
  price = price + 100;
}

// console.log(price);

// price = isLeader === true ? 0 : price + 100;

if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 1000;
}

console.log(price);

price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 1000;
