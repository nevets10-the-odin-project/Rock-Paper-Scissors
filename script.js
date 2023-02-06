"use strict";

const playerBtns = document.querySelectorAll(".options button");
playerBtns.forEach((button) => {
	button.addEventListener("click", populatePlayerChoice);
});
//game();

function game() {
	let playerScore = 0;
	let computerScore = 0;
	let drawCount = 0;

	for (let i = 0; i < 5; i++) {
		const playerSelection = populatePlayerChoice();
		const computerSelection = getComputerChoice();
		let roundResult = "";

		console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);

		roundResult = playRound(playerSelection, computerSelection);

		if (roundResult === "player") {
			console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
			playerScore++;
		} else if (roundResult === "computer") {
			console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
			computerScore++;
		} else if (roundResult === "draw") {
			console.log("Draw!");
			drawCount++;
		} else {
			console.log("Draw...?");
			drawCount++;
		}
	}

	if (playerScore > computerScore) {
		console.log(
			`You Won! Player: ${playerScore} Computer: ${computerScore} Draws: ${drawCount}`
		);
	} else if (playerScore < computerScore) {
		console.log(
			`You Lost! Player: ${playerScore} Computer: ${computerScore} Draws: ${drawCount}`
		);
	} else {
		console.log(
			`It was a tie!? Player: ${playerScore} Computer: ${computerScore} Draws: ${drawCount}`
		);
	}
}

function populatePlayerChoice() {
	const playerChoice = this.classList.value;

	const choiceParent = document.querySelector(".player .choice");

	const img = document.createElement("img");
	img.setAttribute("src", `./img/${playerChoice}.svg`);
	img.setAttribute("alt", `${playerChoice}`);

	const p = document.createElement("p");
	p.textContent = `${playerChoice}`;

	choiceParent.replaceChildren(img, p);
}

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomNumber = Math.floor(Math.random() * choices.length);

	return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "draw";
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
