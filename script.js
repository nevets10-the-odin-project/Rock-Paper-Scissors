"use strict";

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(computerSelection);

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);

  return choices[randomNumber];
}
