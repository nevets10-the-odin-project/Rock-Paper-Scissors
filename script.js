"use strict";

const playerBtns = document.querySelectorAll(".options button");
playerBtns.forEach((button) => {
	button.addEventListener("click", playRound);
});

function playRound() {
	const playerChoice = this.classList.value;
	const computerChoice = getComputerChoice();

	populateChoice("player", playerChoice);
	populateChoice("computer", computerChoice);
	highlightComputerChoice(computerChoice);

	let roundWinner = "computer";

	if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		roundWinner = "player";
	} else if (playerChoice === computerChoice) {
		roundWinner = "draw";
	}

	populateRoundOutcome(roundWinner);
	updateScore(roundWinner);
}

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * choices.length);

	return choices[randomNumber];
}

function populateChoice(picker, choice) {
	const choiceParent = document.querySelector(`.${picker} .choice`);

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

function highlightComputerChoice(choice) {
	const allOptions = document.querySelectorAll(".computer .options div");

	allOptions.forEach((option) => {
		option.style.background = "inherit";
	});

	const choiceDiv = document.querySelector(`.computer .${choice}`);
	choiceDiv.style.background = "rgb(40, 40, 40)";
}

function populateRoundOutcome(roundWinner) {
	const outcomeParent = document.querySelector(".round-outcome");

	const img = document.createElement("img");
	const h2 = document.createElement("h2");

	if (roundWinner === "player") {
		img.setAttribute("src", "./img/win.svg");
		img.setAttribute("alt", "Win");
		h2.textContent = "You Win!";
	} else if (roundWinner === "computer") {
		img.setAttribute("src", "./img/lose.svg");
		img.setAttribute("alt", "Lose");
		h2.textContent = "The Computer Wins!";
	} else {
		img.setAttribute("src", "./img/draw.svg");
		img.setAttribute("alt", "Draw");
		h2.textContent = "Draw!";
	}

	outcomeParent.replaceChildren(img, h2);
}

function updateScore(roundWinner) {
	const scoreElement = document.querySelector(`.scores .${roundWinner} .score`);
	const updatedScore = ++scoreElement.textContent;
	scoreElement.textContent = updatedScore;

	if (updatedScore >= 5 && roundWinner !== "draw") {
		endGame(roundWinner);
	}
}

function endGame(gameWinner) {
	const playerBtns = document.querySelectorAll(".options button");
	playerBtns.forEach((button) => {
		button.removeEventListener("click", playRound);
	});

	const gameOverCard = document.createElement("div");
	gameOverCard.setAttribute("class", "game-over-card");

	const img = document.createElement("img");
	img.setAttribute("src", `./img/${gameWinner}_trophy.png`);
	img.setAttribute("alt", "Trophy");

	const h2 = document.createElement("h2");
	h2.textContent = `${gameWinner === "player" ? "You" : "The Computer"} Won!`;

	const p = document.createElement("p");
	p.textContent = "Refresh the page to play again!";

	gameOverCard.replaceChildren(img, h2, p);

	const mainDiv = document.querySelector(".main");

	mainDiv.appendChild(gameOverCard);
}
