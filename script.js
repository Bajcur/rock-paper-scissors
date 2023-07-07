'use strict';


const rps = ["rock", "paper", "scissors"];
let result = ['', ''];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = rps[(Math.floor(Math.random() * rps.length))]
    return choice
};


const computerSelection = getComputerChoice();
//const playerSelection = prompt("Chose between Rock, Paper and Scissors!").toLowerCase();
function gameScore(result){
    if (result[0] === "win"){
        playerScore++;
    } else if (result[0] === "lost"){
        computerScore++;
    }
    
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    if (playerScore === 5){
        checkWinner("Player");
    } else if (computerScore === 5){
        checkWinner("Computer");
    }

}
function checkWinner(whoWon){
    const winner = document.createElement('h1');
    const results = document.getElementById('results');
    winner.setAttribute("id", "winner");
    results.appendChild(winner);
    if (whoWon === "Player"){
        document.getElementById("winner").textContent = "You've won! Congratulations! If you want to play again press F5.";
        stopTheCount();
    } else if (whoWon === "Computer"){
        document.getElementById("winner").textContent = "You've lost! Better luck next time! If you want to play again press F5.";
        stopTheCount();
    }
}

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
    gameScore(result);

    document.getElementById("p1").textContent = result[1];
    document.getElementById("results")
};

function stopTheCount(){
    buttons.forEach((button) => {
        button.disabled = true;
    });
}
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

