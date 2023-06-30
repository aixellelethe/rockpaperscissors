//Rock Paper Scissors//


//Set the choice array//
const gameArray= ["rock", "paper", "scissors"];

//Get a random selection of rock paper scissors from computer using an array//
//Using math floor to ensure correct integers, and then random based on the array length//

function getComputerChoice(){

    const randomIndex = Math.floor(Math.random()* gameArray.length);
    return gameArray[randomIndex];
}

//Log computer selection//
const computerSelection = gameArray.indexOf(getComputerChoice());
console.log(computerSelection);


//Get a choice from the player//

// Format choice, check to see if its valid, then give value based on gameArray//

function getPlayerChoice(){

    let playerHandCheck= prompt("Rock, paper or scissors?");
        playerHand = playerHandCheck?.toLowerCase();

        if (playerHand === "rock" || playerHand === "paper" || playerHand ==="scissors"){
            return playerHand;

        }   else {
            console.log("Invalid input. Please choose a valid option: Rock, Paper, or Scissors.");
            return getPlayerChoice();
        }
}
// Log player selection//
const playerSelection = gameArray.indexOf(getPlayerChoice());
console.log(playerSelection);

let playerScore = 0
let computerScore = 0
let playRound = 0

function determineWinner(playerSelection, computerSelection)
{
// Returns either player choice or computer choice string in case of winner//
    if ((playRound <=5)){
        if  (playerSelection === computerSelection){
            return "This is a draw! Try again.";
        }

        if (
            (playerSelection === 0 && computerSelection === 2) || 
            (playerSelection === 1 && computerSelection === 0) || 
            (playerSelection === 2 && computerSelection === 1) 
            ){
                playerScore++
                playRound++
                return "You win!"
            }
        if (
            (playerSelection === 0 && computerSelection === 1) ||
            (playerSelection === 1 && computerSelection === 2) ||
            (playerSelection === 2 && computerSelection === 0)
            
            ){
                computerScore++
                playRound++
                return "You lose!"
                

            }
    }    
 }

let result= determineWinner(playerSelection, computerSelection);

console.log(result);
console.log(computerScore); 
console.log(playerScore);
console.log(playRound);

    alert(determineWinner(playerSelection, computerSelection));

// Plays game 5 times, keeps track of scores//