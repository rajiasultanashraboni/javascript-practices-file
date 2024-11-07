/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var yourMark = 85;
var friendMark = 70;

// Check if you scored more than 80
if (yourMark > 80) {
  if (friendMark > 80) {
    console.log("Go for a lunch");
  } else if (friendMark >= 60 && friendMark < 80) {
    console.log("Good luck next time");
  } else if (friendMark >= 40 && friendMark < 60) {
    console.log("Keep your friend's message unseen");
  } else {
    console.log("Block your friend");
  }
} else {
  // If you scored less than or equal to 80
  console.log("Go home, sleep, and act sad");
}
