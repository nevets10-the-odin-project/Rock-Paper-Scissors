"use strict";

game();

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		const playerSelection = getPlayerChoice();
		const computerSelection = getComputerChoice();
		let winner = "";

		winner = playRound(playerSelection, computerSelection);

		if (winner === "player") {
			playerScore++;
		} else if (winner === "computer") {
			computerScore++;
		}
	}

	if (playerScore > computerScore) {
		console.log(`You Won! Player: ${playerScore} Computer: ${computerScore}`);
	} else if (playerScore < computerScore) {
		console.log(`You lost! Player: ${playerScore} Computer: ${computerScore}`);
	} else {
		console.log("It was a tie!?");
	}
}

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

function playRound(playerSelection, computerSelection) {
	console.log("Player", playerSelection);
	console.log("Computer", computerSelection);

	if (playerSelection === computerSelection) {
		console.log("Tie!");
		return "none";
	} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
		return "player";
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
		return "player";
	} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
		return "player";
	} else {
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
		return "computer";
	}
}
