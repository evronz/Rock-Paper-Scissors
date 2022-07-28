function getComputerSelection(){
  let choices = ["Rock", "Paper", "Scissors"]
  return choices[Math.floor(Math.random() * 3)]
}

function displayOutCome(prompt){
  const text = document.createElement('p');
  text.textContent = prompt;
  const displayTextDiv = document.querySelector('.outcome');
  displayTextDiv.innerText = "";
  displayTextDiv.appendChild(text);
}

function playRound(playerSelection){
  playerSelection = playerSelection.toLowerCase()
  let computerSelection = (getComputerSelection()).toLowerCase()

  if(playerSelection == "rock") {
      if(computerSelection == "scissors"){
          displayOutCome("You win! Paper beats Scissors.");
          return "win"
      } else if(computerSelection == "paper"){
          displayOutCome("You lose! Paper beats Rock.");
          return "lose"
      } else {
        displayOutCome("It's a tie! You both played Rock.");
        return "tie"
      }
  } else if(playerSelection == "paper") {
      if(computerSelection == "rock"){
        displayOutCome("You win! Paper beats Rock.");
        return "win"
      } else if(computerSelection == "scissors"){
        displayOutCome("You lose! Scissors beats Paper.");
        return "lose"
      } else{
        displayOutCome("It's a tie! You both played Paper.");
        return "tie"
      }
  } else {
      if(computerSelection == "paper"){
        displayOutCome("You win! Scissors beats Paper.");
        return "win"
      } else if(computerSelection == "rock"){
        displayOutCome("You lose! Rock beats Scissors.");
        return "lose"
      } else{
        displayOutCome("It's a tie! You both played Scissors.");
        return "tie"
      }
  }
}

let result;

// Score Board Start
let playerScore = 0, computerScore = 0;
const score = document.querySelector('.score-board')
const pScore = document.createElement('p')
const cScore = document.createElement('p')

score.appendChild(pScore);
score.appendChild(cScore);

pScore.innerText = "Player's Score: " + playerScore
cScore.innerText = "Computer's Score: " + computerScore

function scoreBoard(){
  switch(result){
    case "win":
      ++playerScore
      break;
    case "lose":
      ++computerScore
      break;
  }

  pScore.innerText = "Player's Score: " + playerScore
  cScore.innerText = "Computer's Score: " + computerScore
}
// Score Board End

// Annouce Winner  Start
const winner = document.querySelector('.winner')
const text = document.createElement('p')
winner.appendChild(text)

function announceWinner(){
  if(playerScore > computerScore){
    text.innerText = "\n*****WINNER*****" + "\n\nPlayer wins by " + (playerScore - computerScore) + " points." + "\n\nGame Over!\nReload to play again."
  } else if(playerScore < computerScore){
    text.innerText = "\n*****WINNER*****" + "\n\nComputer wins by " + (computerScore - playerScore) + " points." + "\n\nGame Over!\nReload to play again."
  }
}
// Annouce Winner End

function playGame(){
  result = playRound(this.innerText)
  scoreBoard();

  if(playerScore == 5 || computerScore == 5){
    announceWinner();
    buttons.forEach(button => button.disabled = true)
  }
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', playGame))