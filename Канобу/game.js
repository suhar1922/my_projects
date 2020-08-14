//global
var playerChoice;
var player_img;
var AI_img;
var AIChoice;
var turn = "player";
var turns = ["kam", "nozh", "bum"];
var player_img_base = ["img/kamen_player.svg", "img/nozhnithee_player.svg", "img/bumaga_player.svg"];
var AI_img_base = ["img/kamen_AI.svg", "img/nozhnithee_AI.svg", "img/bumaga_AI.svg"];
var playerScore = 0;
var AIScore = 0;
var playerArea = document.getElementById("player_img");
var AIArea = document.getElementById("AI_img");
//player
function choice_kam() {
  playerChoice = turns[0];
  player_img = player_img_base[0];
  turn = "AI";
  AI_ran_choice();
}
function choice_nozh() {
  playerChoice = turns[1];
  player_img = player_img_base[1];
  turn = "AI";
  AI_ran_choice();
}
function choice_bum() {
  playerChoice = turns[2];
  player_img = player_img_base[2];
  turn = "AI";
  AI_ran_choice();
}
//AI
function AI_ran_choice() {
  if (turn == "AI") {
    let random = Math.floor(Math.random()*3);
    AIChoice = turns[random];
    AI_img = AI_img_base[random];
    console.log(AIChoice);
    turn = "player";
    drow();
  }
}
//drow
function drow() {
  playerArea.src = player_img;
  AIArea.src = AI_img;
  check();
}
//check
var text = document.getElementById('text');
var player_score_area = document.getElementById('player_score');
var AI_score_area = document.getElementById('AI_score');
function check() {
  if (playerChoice == AIChoice) {
    text.innerHTML = 'ничья';
  }
  if (playerChoice == "kam" && AIChoice == "bum") {
    AIScore ++;
    text.innerHTML = 'ИИ побеждает';
  }
  if (playerChoice == "nozh" && AIChoice == "kam") {
    AIScore ++;
    text.innerHTML = 'ИИ побеждает';
  }
  if (playerChoice == "bum" && AIChoice == "nozh") {
    AIScore ++;
    text.innerHTML = 'ИИ побеждает';
  }
  if (playerChoice == "kam" && AIChoice == "nozh") {
    playerScore ++;
    text.innerHTML = 'Игрок побеждает';
  }
  if (playerChoice == "nozh" && AIChoice == "bum") {
    playerScore ++;
    text.innerHTML = 'Игрок побеждает';
  }
  if (playerChoice == "bum" && AIChoice == "kam") {
    playerScore ++;
    text.innerHTML = 'Игрок побеждает';
  }
  player_score_area.innerHTML = ("Счёт:" + playerScore);
  AI_score_area.innerHTML = ("Счёт:" + AIScore);
}
