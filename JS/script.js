/*
Generating a random number from 1-6 using mathrandom-function to return a number btwn 0 & 1
Then convert it to a whole number using math-floor function
Finally we get our range between 1-6 by multiplying it by then adding one (1) since the
mathfloor-function rounds off to the nearest whole-number our
*/
function Player(die1, die2){
  this.die1 = die1;
  this.die2 = die2;
}


$(document).ready(function(){
  $("input#player1-btn").click(function(){

    var player1Die1 = Math.floor((Math.random()*6)+1);
    var player1Die2 = Math.floor((Math.random()*6)+1);

    var player1 = new Player(player1Die1, player1Die2);

    if(player1Die1 === 1 || player1Die2 === 1){
      var points = 0;
    }else{
      points = player1Die1 + player1Die2;
    }
    $("label#player1-die1").text(player1Die1).show();
    $("label#player1-die2").text(player1Die2).show();
    $("span#player1Score").text("Your score is: "+points);

  });
  $("input#player2-btn").click(function(){

    var player2Die1 = Math.floor((Math.random()*6)+1);
    var player2Die2 = Math.floor((Math.random()*6)+1);

    var player2 = new Player(player2Die1, player2Die2);

    if(player2Die1 === 1 || player2Die2 === 1){
      var points2 = 0;
    }else{
      points2 = player2Die1 + player2Die2;
    }
    $("label#player2-die1").text(player2Die1).show();
    $("label#player2-die2").text(player2Die2).show();
    $("span#player2Score").text("Your score is: "+points2);
  });
});
