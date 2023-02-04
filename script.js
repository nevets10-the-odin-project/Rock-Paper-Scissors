"use strict";

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

game();

function getPlayerChoice() {
	const choice = prompt("Rock, Paper or Scissors?", "");
	const lowerCaseChoice = choice.toLocaleLowerCase();
	const capitalizedChoice =
		lowerCaseChoice.charAt(0).toLocaleUpperCase() + lowerCaseChoice.slice(1);

	return capitalizedChoice;
}

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomNumber = Math.floor(Math.random() * choices.length);

	return choices[randomNumber];
}

function game() {
	const playerScore = 0;
	const computerScore = 0;

	playRound(playerSelection, computerSelection);
	console.log("Player Score", playerScore);
	console.log("Computer Score", computerScore);
}

function playRound(playerSelection, computerSelection) {
	console.log("Player", playerSelection);
	console.log("Computer", computerSelection);

	if (playerSelection === computerSelection) {
		console.log("Tie!");
	} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
	} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
	} else {
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
	}
}
