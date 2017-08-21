/*
Generating a random number from 1-6 using mathrandom-function to return a number btwn 0 & 1
Then convert it to a whole number using math-floor function
Finally we get our range between 1-6 by multiplying it by then adding one (1) since the
mathfloor-function rounds off to the nearest whole-number our
*/
var die = Math.floor((Math.random()*6)+1);
