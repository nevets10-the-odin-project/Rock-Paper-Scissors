"use strict";

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomNumber = Math.floor(Math.random() * choices.length);

	return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
	console.log(computerSelection);
}
