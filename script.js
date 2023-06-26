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
            console.log("Invalid");
            return getPlayerChoice();
        }
}
// Log player selection//
const playerSelection = gameArray.indexOf(getPlayerChoice());
console.log(playerSelection);



function determineWinner(playerSelection, computerSelection)
{
// Returns either player choice or computer choice string in case of winner//
    switch (true) {
        case playerSelection === computerSelection:
        return "This is a draw! Try again.";
        case playerSelection === 0 && computerSelection === 1:
        return "You lose! Paper beats Rock!";
        case playerSelection === 0 && computerSelection === 2:
        return "You win! Rock beats Scissors!";
        case playerSelection === 1 && computerSelection === 0:
        return "You win! Paper beats Rock!";
        case playerSelection === 1 && computerSelection === 2:
        return "You lose, Scissors beats Paper!";
        case playerSelection === 2 && computerSelection === 0:
        return "You lose, Rock beats Scissors!";
        case playerSelection === 2 && computerSelection === 1:
        return "You win! Scissors beats paper!";
        default:
        return "Invalid input. Please choose a valid option: Rock, Paper, or Scissors.";
  }
}
    alert(determineWinner(playerSelection, computerSelection));

// Plays game 5 times, keeps track of scores//
