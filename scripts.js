console.log("Hello World");

// variable human and computer score

let humanScore = 0;
let computerScore = 0;

// function getComputerChoice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// function getHumanChoice use prompt
function getHumanChoice() {
  let humanChoice = prompt("Please enter rock, paper, or scissors");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

// function determineWinner
function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return "The computer won!";
    } else {
      humanScore++;
      return "You won!";
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return "The computer won!";
    } else {
      humanScore++;
      return "You won!";
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return "The computer won!";
    } else {
      humanScore++;
      return "You won!";
    }
  }
}

// function playGame
function playGame() {
  console.log("Human Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  console.log("You threw: " + humanChoice);
  console.log("The computer threw: " + computerChoice);

  console.log(determineWinner(humanChoice, computerChoice));
}

// call playGame 5 time
for (let index = 0; index < 5; index++) {
  playGame();
}
