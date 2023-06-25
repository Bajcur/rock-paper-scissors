'use strict';


const rps = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = rps[(Math.floor(Math.random() * rps.length))]
    return choice
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Chose between Rock, Paper and Scissors!").toLowerCase();

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!"                
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lost! Rock loses to Paper!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lost! Paper loses to Scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lost! Scissors loses to Rock!"
    } else {
        return "It's a Draw!"
    }
}




console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))

