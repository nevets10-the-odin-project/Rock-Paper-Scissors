"use strict";

game();

function game() {
	let playerScore = 0;
	let computerScore = 0;
	let tieCount = 0;

	for (let i = 0; i < 5; i++) {
		const playerSelection = getPlayerChoice();
		const computerSelection = getComputerChoice();
		let roundResult = "";

		console.log("Player", playerSelection);
		console.log("Computer", computerSelection);

		roundResult = playRound(playerSelection, computerSelection);

		if (roundResult === "player") {
			console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
			playerScore++;
		} else if (roundResult === "computer") {
			console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
			computerScore++;
		} else if (roundResult === "tie") {
			console.log("Tie!");
			tieCount++;
		} else {
			console.log("Tie...?");
			tieCount++;
		}
	}

	if (playerScore > computerScore) {
		console.log(`You Won! Player: ${playerScore} Computer: ${computerScore} Ties: ${tieCount}`);
	} else if (playerScore < computerScore) {
		console.log(`You Lost! Player: ${playerScore} Computer: ${computerScore} Ties: ${tieCount}`);
	} else {
		console.log(`It was a tie!? Player: ${playerScore} Computer: ${computerScore} Ties: ${tieCount}`);
	}
}

function getPlayerChoice() {
	const choice = prompt("Rock, Paper or Scissors?", "") || "Nothing";
	const lowerCaseChoice = choice.toLocaleLowerCase();
	const capitalizedChoice = lowerCaseChoice.charAt(0).toLocaleUpperCase() + lowerCaseChoice.slice(1);

	if (capitalizedChoice === "Rock" || capitalizedChoice === "Paper" || capitalizedChoice === "Scissors") {
		return capitalizedChoice;
	} else {
		console.log(`${capitalizedChoice} is not a valid choice. Let me choose for you.`);
		return getComputerChoice();
	}
}

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomNumber = Math.floor(Math.random() * choices.length);

	return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "tie";
	} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
		return "player";
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		return "player";
	} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
		return "player";
	} else {
		return "computer";
	}
}
