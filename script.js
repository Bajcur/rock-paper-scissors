'use strict';


const rps = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = rps[(Math.floor(Math.random() * rps.length))]
    return choice
}


//const computerSelection = "scissors";
//const playerSelection = prompt("Chose between Rock, Paper and Scissors!").toLowerCase();

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        let result = ["win", "You Win! Rock beats Scissors!"];
        return result                
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        let result = ["lost", "You Lose! Rock loses to Paper!"];
        return result
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        let result = ["win", "You Win! Paper beats Rock!"];
        return result
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        let result = ["lost", "You Lose! Paper loses to Scissors!"];
        return result
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        let result = ["win", "You Win! Scissors beats Paper!"];
        return result
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        let result = ["lost", "You Lose! Scissors loses to Rock!"];
        return result
    } else {
        let result = ["draw", "It's a Draw!"];
        return result
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <= 4; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Chose between Rock, Paper and Scissors!").toLowerCase();
        let result = playRound(playerSelection, computerSelection);
        console.log(result[1])
        if (result[0] === "win"){
            playerScore++;
        } else if (result[0] === "lost") {
            computerScore++;
        } else {
            computerScore++;
            playerScore++;
        }
    }
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore > computerScore) {
        return console.log("You' ve won the entire game!")
    } else if (playerScore < computerScore) {
        return console.log("You've lost the entire game! Better luck next time!")
    } else {
        return console.log("It's an overall Draw! Not great, not terrible!")
    }
}

game()
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection)[0]);

