//win counter
var score1 = 0;
var score2 = 0;

//Items Player
const rock1 = document.getElementById("rock1");
const paper1 = document.getElementById("paper1");
const scissor1 = document.getElementById("scissors1");

//Items Bot
const rock2 = document.getElementById("rock2");
const paper2 = document.getElementById("paper2");
const scissor2 = document.getElementById("scissors2");

//Play Again Game
function retry() {
  //Hide div
  $("#answer").hide();
  $("#try").hide();

  for (let i = 1; i <= 2; i++) {
    //Disabled Buttom
    $("#rock" + i).removeAttr("disabled");
    $("#paper" + i).removeAttr("disabled");
    $("#scissors" + i).removeAttr("disabled");

    //Color Original
    $("#rock" + i).css("background-color", "rgb(244, 88, 71)");
    $("#paper" + i).css("background-color", "rgb(244, 88, 71)");
    $("#scissors" + i).css("background-color", "rgb(244, 88, 71)");
  }
}
function scissors_1() {
  rock1.disabled = true;
  paper1.disabled = true;
  scissor1.style.backgroundColor = "rgb(29, 33, 41)";
  SmartBot();
  game();
}
function rock_1() {
  scissor1.disabled = true;
  paper1.disabled = true;
  rock1.style.backgroundColor = "rgb(29, 33, 41)";
  SmartBot();
  game();
}
function paper_1() {
  scissor1.disabled = true;
  rock1.disabled = true;
  paper1.style.backgroundColor = "rgb(29, 33, 41)";
  SmartBot();
  game();
}

function Player() {
  score1++;
  $("#answer").show();
  $("#try").show();
  $("#answer").html("Winner Player");
  $("#point1").html(score1);
}
function Bot() {
  score2++;
  $("#answer").show();
  $("#try").show();
  $("#answer").html("Winner Bot");
  $("#point2").html(score2);
}
function SmartBot() {
  var Bot = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (Bot == 1) {
    paper2.disabled = true;
    scissor2.disabled = true;
    rock2.style.backgroundColor = "rgb(29, 33, 41)";
  } else {
    if (Bot == 2) {
      rock2.disabled = true;
      scissor2.disabled = true;
      paper2.style.backgroundColor = "rgb(29, 33, 41)";
    } else {
      if (Bot == 3) {
        rock2.disabled = true;
        paper2.disabled = true;
        scissor2.style.backgroundColor = "rgb(29, 33, 41)";
      }
    }
  }
}
function Draw() {
  $("#answer").show();
  $("#try").show();
  $("#answer").html("Draw");
}
function game() {
  //Draw
  if (scissor1.disabled == false && scissor2.disabled == false) {
    Draw();
    scissor1.disabled = true;
    scissor2.disabled = true;
  }
  if (paper1.disabled == false && paper2.disabled == false) {
    Draw();
    paper1.disabled = true;
    paper2.disabled = true;
  }
  if (rock1.disabled == false && rock2.disabled == false) {
    Draw();
    rock1.disabled = true;
    rock2.disabled = true;
  }

  //Winner player
  if (scissor1.disabled == false && paper2.disabled == false) {
    Player();
    scissor1.disabled = true;
    paper2.disabled = true;
  }
  if (rock1.disabled == false && scissor2.disabled == false) {
    Player();
    rock1.disabled = true;
    scissor2.disabled = true;
  }
  if (paper1.disabled == false && rock2.disabled == false) {
    Player();
    paper1.disabled = true;
    rock2.disabled = true;
  }

  //Winner Bot
  if (scissor2.disabled == false && paper1.disabled == false) {
    Bot();
    scissor2.disabled = true;
    paper1.disabled = true;
  }
  if (rock2.disabled == false && scissor1.disabled == false) {
    Bot();
    rock2.disabled = true;
    scissor1.disabled = true;
  }
  if (paper2.disabled == false && rock1.disabled == false) {
    Bot();
    paper2.disabled = true;
    rock1.disabled = true;
  }
}
