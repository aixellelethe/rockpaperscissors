//Rock Paper Scissors//


//Get a random selection of rock paper scissors from computer using an array//
//Using math floor to ensure correct integers, and then random based on the array length//

function getComputerChoice(){

    const computerHand = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()* computerHand.length);
    return computerHand[randomIndex];
}

//Log computer selection//
const computerSelection = getComputerChoice();


//Get a choice from the player//

// Format choice, check to see if its valid, then give value//

function getPlayerChoice(){

    let playerHandCheck= prompt("Rock, paper or scissors?");
        playerHand = playerHandCheck.toLowerCase();

        if ( playerHand != null && playerHand === "rock" || playerHand === "paper" || playerHand ==="scissors"){
            return playerHand;


        }   else {
            console.log("Invalid");
            return getPlayerChoice();
        }
}
// Log player selection//
const playerSelection = getPlayerChoice();


function playRound (playerSelection, computerSelection){


}