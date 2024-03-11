var player1 = Math.random();
var player2 = Math.random();

player1 = Math.floor(player1 * 6);
player2 = Math.floor(player2 * 6);

var images = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png",
 "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

 document.getElementById("play1").src = images[player1];
 document.getElementById("play2").src = images[player2];




if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 is the winner";
}
else if(player1 == player2)
    document.querySelector("h1").innerHTML = "Its a tie";

else {
    document.querySelector("h1").innerHTML = "🚩Player 2 is the winner";

}