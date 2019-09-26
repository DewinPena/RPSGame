$(document).ready(function() {
  var userScore = 0;
  var compScore = 0;
  var compOption ="";
  var compChoice ="";
  var result = "";

  function win() {
    userScore++;
    $("#userScore").html(userScore);
    result = "WON"
  }
  function lost() {
    compScore++;
    $("#compScore").html(compScore);
    result = "LOST"
  }
  function tie() {
    result = "TIE"
  }

  function getComputerChoice() {
    const choice = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    compChoice =  choice[randomNumber];
    return compChoice
  }


  function addTableScore(){
      var markup = "<tr><td>" + userOption + "</td><td>" + compOption+ "</td> <td>" + result + "</td></tr>";
      $("table tbody").append(markup);
  }

  function game(userChoice) {
    
    switch (userChoice + getComputerChoice()) {
      case "pr":
      case "rs":
      case "sp":
        win();
        break;
      case "rp":
      case "sr":
      case "ps":
        lost();
        break;
      case "rr":
      case "ss":
      case "pp":
        tie();
        break;
    }
    switch (compChoice) {
      case "r":
        compOption = "ROCK";
        break;
      case "p":
        compOption = "PAPER";
        break;
      case "s":
        compOption = "SCISSORS";
        break;
    }
  
    addTableScore();

  }

  function mainGame() {
    
    $("#r").click(function() {
      userOption = "ROCK"
      game("r");
    });
    $("#p").click(function() {
      userOption = "PAPER"
      game("p");
    });
    $("#s").click(function() {
      userOption = "SCISSORS"
      game("s");
    });
  }

  mainGame();
});
