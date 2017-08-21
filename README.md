# Pig-Dice
## Instructions and Requirements
1. two players and two six-sided dice.
2. The goal is to be the first player to reach 100 points.
3. On a turn, a player rolls the die repeatedly until either:
  - A 1 is rolled -> If a 1 is rolled, that player's turn ends and no points are earned
  - The player chooses to hold (stop rolling) -> If the player chooses to hold, all of the points rolled during that turn are added to his or her score.
## Logic-Design
1. Generating a random number from 1-6 using mathrandom-function to return a number btwn 0 & 1.
2. We get our range between 1-6 by multiplying it by six (6) then adding one (1) since the mathfloor-function
    rounds off to the nearest whole-number - the maximum number generated might be 5.
3. Convert it to a whole number using math-floor function rounding off to the nearest whole number.
4. Printing the result of the dice roll upon clicking the roll button.
5. deciding the winning and loosing score.
