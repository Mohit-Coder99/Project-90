
var player_1_name = localStorage.getItem("player1");
var player_2_name = localStorage.getItem("player2");

var player_1_score = 0;
var player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

console.log(player_1_score);

