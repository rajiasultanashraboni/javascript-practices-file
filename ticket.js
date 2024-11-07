/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var ticket = 800;
var age = 40;
var isStudent = false;

if (age < 10) {
  console.log("free");
} else if (isStudent) {
  // 50% discount
  const discount = (ticket * 50) / 100;
  const payAmount = ticket - discount;
  console.log(payAmount);
} else if (age >= 60) {
  // 15% discount
  const discount = (ticket * 15) / 100;
  const payAmount = ticket - discount;
  console.log(payAmount);
} else {
  console.log(ticket);
}
