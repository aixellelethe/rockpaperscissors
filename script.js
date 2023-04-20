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
const computerSelection = getComputerChoice();


//Get a choice from the player//

// Format choice, check to see if its valid, then give value based on gameArray//

function getPlayerChoice(){

    let playerHandCheck= prompt("Rock, paper or scissors?");
        playerHand = playerHandCheck?.toLowerCase();

        if (playerHand === "rock" || playerHand === "paper" || playerHand ==="scissors"){
            playerHand = gameArray.indexOf(playerHand);
            return playerHand;

        }   else {
            console.log("Invalid");
            return getPlayerChoice();
        }
}
// Log player selection//
const playerSelection = getPlayerChoice()



function determineWinner(playerChoice, computerChoice)
{
// Returns either player choice or computer choice string in case of winner//


}
