'use strict';


const rps = ["rock", "paper", "scissors"];
let result = ['', ''];

function getComputerChoice(){
    let choice = rps[(Math.floor(Math.random() * rps.length))]
    return choice
};


const computerSelection = getComputerChoice();
//const playerSelection = prompt("Chose between Rock, Paper and Scissors!").toLowerCase();

function playRound(playerSelection, computerSelection){ 
    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = ["win", "You Win! Rock beats Scissors!"];
                        
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        result = ["lost", "You Lose! Rock loses to Paper!"];
        
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = ["win", "You Win! Paper beats Rock!"];
        
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = ["lost", "You Lose! Paper loses to Scissors!"];
        
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = ["win", "You Win! Scissors beats Paper!"];
        
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = ["lost", "You Lose! Scissors loses to Rock!"];
        
    } else {
        result = ["draw", "It's a Draw!"];
        
    }
    document.getElementById('p1').innerHTML = result;
};
//playRound('rock', getComputerChoice());

const buttons = document.querySelectorAll('button');
//rock.addEventListener('click', playRound(rock.id, getComputerChoice()));

buttons.forEach((button) => { 
    button.addEventListener('click', () => {
        console.log(button.id);
        result = playRound(button.id, getComputerChoice());
        });
});

//console.log(playerSelection);

/*
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
*/
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection)[0]);

