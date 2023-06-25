'use strict';


const rps = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let choice = rps[(Math.floor(Math.random() * rps.length))]
    return console.log(choice)
}

getComputerChoice()

