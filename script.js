"use strict";

const playerBtns = document.querySelectorAll(".options button");
playerBtns.forEach((button) => {
	button.addEventListener("click", playRound);
});

function playRound() {
	const playerChoice = this.classList.value;
	const computerChoice = getComputerChoice();

	populateChoice(playerChoice, true);
	populateChoice(computerChoice, false);

	if (playerChoice === computerChoice) {
		console.log("Draw");
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		console.log("Win");
	} else {
		console.log("Lose");
	}
}

function populateChoice(choice, isPlayer) {
	const choiceParent = document.querySelector(
		`.${isPlayer ? "player" : "computer"} .choice`
	);

	const img = document.createElement("img");
	img.setAttribute("src", `./img/${choice}.svg`);
	img.setAttribute("alt", `${choice}`);

	const p = document.createElement("p");
	p.textContent = `${choice}`;

	choiceParent.replaceChildren(img, p);
}

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * choices.length);

	return choices[randomNumber];
}
