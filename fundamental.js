var orangePrice = "20";
// var applePrice = 30;
// var applePrice = 30.2;
var applePrice = "20.5"; //this is string

//to convert string into number
var applePrice = parseFloat("20.5");

var orangePrice = parseInt("20");

console.log(typeof orangePrice);
console.log(typeof applePrice);
var total = orangePrice + applePrice;
// console.log(orangePrice);
// console.log(applePrice);
console.log(total);

var first = 0.1;
var second = 0.2;
var sum = first + second;

// console.log(sum.toFixed(2));

var convert = parseFloat(sum.toFixed(2));

console.log(convert);
