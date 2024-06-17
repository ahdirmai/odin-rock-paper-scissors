console.log("Hello World");

// variable human and computer score
let humanScore = 0;
let computerScore = 0;

// function getComputerChoice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// function determineWinner
function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You won!";
  } else {
    computerScore++;
    return "The computer won!";
  }
}

// function updateScore
function updateScore() {
  document.getElementById("user-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
}

// function resetGame
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
  document.getElementById("result-message").textContent = "Make your move";
}

// function playGame
function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultMessage = determineWinner(humanChoice, computerChoice);
  document.getElementById(
    "result-message"
  ).textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${resultMessage}`;
  updateScore();
}

// Event listeners
document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    playGame(humanChoice);
  });
});

document.getElementById("reset").addEventListener("click", resetGame);

// Initial call to update score display
updateScore();
