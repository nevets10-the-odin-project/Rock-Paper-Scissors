"use strict";

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);

    console.log(randomNumber);
    console.log(choices[randomNumber]);
}

getComputerChoice();