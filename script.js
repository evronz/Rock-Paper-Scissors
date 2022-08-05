function getComputerSelection(){
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function displayOutCome(prompt){
  const text = document.createElement('p');
  text.classList.add("outcome-text");
  text.textContent = prompt;
  const displayTextDiv = document.querySelector('.outcome');
  displayTextDiv.innerText = "";
  displayTextDiv.appendChild(text);
}

let computerSelection;

function playRound(playerSelection){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerSelection();

  if(playerSelection == "rock") {
      if(computerSelection == "scissors"){
          displayOutCome("You win this round! Paper beats Scissors.");
          return "win";
      } else if(computerSelection == "paper"){
          displayOutCome("You lose this round! Paper beats Rock.");
          return "lose";
      } else {
        displayOutCome("It's a tie! You both played Rock.");
        return "tie";
      }
  } else if(playerSelection == "paper") {
      if(computerSelection == "rock"){
        displayOutCome("You win this round! Paper beats Rock.");
        return "win";
      } else if(computerSelection == "scissors"){
        displayOutCome("You lose this round! Scissors beats Paper.");
        return "lose";
      } else{
        displayOutCome("It's a tie! You both played Paper.");
        return "tie";
      }
  } else {
      if(computerSelection == "paper"){
        displayOutCome("You win this round! Scissors beats Paper.");
        return "win";
      } else if(computerSelection == "rock"){
        displayOutCome("You lose this round! Rock beats Scissors.");
        return "lose";
      } else{
        displayOutCome("It's a tie! You both played Scissors.");
        return "tie";
      }
  }
}

let result;

const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');

function selectionDisplay(playerSelection){
  playerSelectionDisplay.innerText = playerSelection.toUpperCase();
  computerSelectionDisplay.innerText = computerSelection.toUpperCase();
}

let playerScore = 0, computerScore = 0;
const pScore = document.getElementById('player-score');
const cScore = document.getElementById('computer-score');

pScore.innerText = "Player's Score: " + playerScore;
cScore.innerText = "Computer's Score: " + computerScore;

function scoreBoard(){
  switch(result){
    case "win":
      ++playerScore;
      break;
    case "lose":
      ++computerScore;
      break;
  }

  pScore.innerText = "Player's Score: " + playerScore;
  cScore.innerText = "Computer's Score: " + computerScore;
}

const winner = document.querySelector('.winner');
const modalDiv = document.querySelector('#modal');
const playAgainButton = document.querySelector('.play-again');

function announceWinner(){
  modalDiv.classList.add('modal');

  if(playerScore > computerScore){
    winner.innerText = "Player wins by " + (playerScore - computerScore) + " points.";
  } else if(playerScore < computerScore){
    winner.innerText =  "Computer wins by " + (computerScore - playerScore) + " points.";
  }

  playAgainButton.addEventListener('click', () => location.reload());
}

function playGame(){
  result = playRound(this.innerText);
  selectionDisplay(this.innerText);
  scoreBoard();

  if(playerScore == 10 || computerScore == 10){
    setTimeout(announceWinner, 500);
    buttons.forEach(button => button.disabled = true);
  }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', playGame));