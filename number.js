/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

var num1 = 25;
var num2 = 45;

var result;
if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}

console.log(result);

result = num1 > num2 ? num1 * 2 : num1 + num2;
