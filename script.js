let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

console.log(getComputerChoice());

// const rockButton = document.getElementById("rock");

// rockButton.addEventListener("click", function() {
//     const computerChoice = getComputerChoice();
//     let message = "";

//     if (computerChoice === "rock") {
//         message = "It's a tie! 🤝";
//     } else if (computerChoice === "scissors") {
//         message = "You win! 🎉 Rock beats scissors.";
//     } else {
//         message = "Computer wins! 💻 Paper beats rock.";
//     }

//     document.getElementById("result").textContent =
//         "You chose rock. Computer chose " +
//         computerChoice + ". " + message;
// });

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  let message = "";

  if (playerChoice === computerChoice) {
    message = "It's a tie! 🤝";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    message = "You win! 🎉";
  } else {
    computerScore++;
    message = "Computer wins! 💻";
  }

  document.getElementById("result").textContent =
    "You chose " +
    playerChoice +
    ". Computer chose " +
    computerChoice +
    ". " +
    message;

  document.getElementById("score").textContent =
    "You: " + playerScore + " | Computer: " + computerScore;
}

document.getElementById("rock").addEventListener("click", function () {
  playGame("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  playGame("scissors");
});

document.getElementById("reset").addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;

  document.getElementById("score").textContent = `You: ${playerScore} | Computer: ${computerScore}`;

  document.getElementById("result").textContent =
    "Game reset! Choose your move.";
});
