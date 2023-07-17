// Key Lock Chest

// Scores and Array

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let roundWinner = '';
const gameArray = ['key','lock','chest'];

// Choices
let computerChoice = '';
let playerChoice ='';


// Computer Choice

function setComputerChoice(){

    const randomIndex = Math.floor(Math.random()* gameArray.length);
    computerChoice = gameArray[randomIndex];
}

// UI
const keybtn = document.getElementById('keybtn');
const lockbtn = document.getElementById('lockbtn');
const chestbtn = document.getElementById('chestbtn');
const playerScoreTxt = document.getElementById('playerscore');
const computerScoreTxt = document.getElementById('computerscore');
const resultDiv = document.getElementById('resultmsgbox');
const resultMsg = document.createElement('p');

// Event Listeners


  keybtn.addEventListener('click', event => {
    playerChoice = 'key';
    determineWinner();
  });

  lockbtn.addEventListener('click', event => {
    playerChoice = 'lock';
    determineWinner();
  });

  chestbtn.addEventListener('click', event => {
    playerChoice = 'chest';
    determineWinner();
  });

//Game
setComputerChoice();

function determineWinner(){
  console.log(playerChoice);
  console.log(computerChoice);
 
    if (playerChoice === computerChoice){
      resultMsg.textContent = 'You tied! No points awarded this round';
      resultDiv.appendChild(resultMsg);
    }
    else if
    (playerChoice === 'key' && computerChoice === 'lock' ||
    playerChoice === 'lock' && computerChoice === 'chest' ||
    playerChoice === 'chest' && computerChoice === 'key'){
      resultMsg.textContent = `You won! ${playerChoice} beats ${computerChoice}!`;
      resultDiv.appendChild(resultMsg);
      playerScore++;
    }
    else{
      resultMsg.textContent = `You lose. ${computerChoice} beats ${playerChoice}!`;
      resultDiv.appendChild(resultMsg);
      computerScore++;
    }
      roundCount++;
      console.log(roundCount);
      newRound();
      console.log(playerScore);
      console.log(computerScore);
}

//new round
  function newRound(){
    if(playerScore >= 5 || computerScore >= 5){
      gameOver();
  }
  else{
    resultMsg.textContent += `New round, make another choice.`;
    setComputerChoice();
  }
}

//Game Over

function gameOver(){
  if( playerScore === 5){
    alert('You Win!');
  }
  else{
    alert('You lose!');
  }
}