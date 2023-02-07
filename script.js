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
		populateRoundOutcome("draw");
		updateScore("draw");
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		populateRoundOutcome("win");
		updateScore("player");
	} else {
		populateRoundOutcome("lose");
		updateScore("computer");
	}
}

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * choices.length);

	return choices[randomNumber];
}

function populateChoice(choice, isPlayer) {
	const choiceParent = document.querySelector(
		`.${isPlayer ? "player" : "computer"} .choice`
	);

	const capitalizedChoice = choice
		.charAt(0)
		.toUpperCase()
		.concat(choice.slice(1));

	const img = document.createElement("img");
	img.setAttribute("src", `./img/${choice}.svg`);
	img.setAttribute("alt", `${choice}`);

	const p = document.createElement("p");
	p.textContent = capitalizedChoice;

	choiceParent.replaceChildren(img, p);
}

function populateRoundOutcome(outcome) {
	const outcomeParent = document.querySelector(".round-outcome");
	const capitalizedOutcome = outcome
		.charAt(0)
		.toUpperCase()
		.concat(outcome.slice(1));

	const img = document.createElement("img");
	img.setAttribute("src", `./img/${outcome}.svg`);
	img.setAttribute("alt", `${outcome}`);

	const h2 = document.createElement("h2");
	if (outcome === "win" || outcome === "lose") {
		h2.textContent = `You ${capitalizedOutcome}!`;
	} else {
		h2.textContent = `${capitalizedOutcome}!`;
	}

	outcomeParent.replaceChildren(img, h2);
}

function updateScore(scorer) {
	const scoreElement = document.querySelector(`.scores .${scorer} .score`);
	const updatedScore = ++scoreElement.textContent;
	scoreElement.textContent = updatedScore;

	if (updatedScore >= 5 && scorer !== "draw") {
		endGame(scorer);
	}
}

function endGame(winner) {
	const playerBtns = document.querySelectorAll(".options button");
	playerBtns.forEach((button) => {
		button.removeEventListener("click", playRound);
	});

	const gameOverCard = document.createElement("div");
	gameOverCard.setAttribute("class", "game-over-card");

	const img = document.createElement("img");
	img.setAttribute("src", `./img/${winner}_trophy.png`);
	img.setAttribute("alt", "Trophy");

	const h2 = document.createElement("h2");
	h2.textContent = `${winner === "player" ? "You" : "The computer"} Won!`;

	gameOverCard.replaceChildren(img, h2);

	const mainDiv = document.querySelector(".main");

	mainDiv.appendChild(gameOverCard);
}
