const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoise
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice  = e.target.id 
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  console.log(randomNumber)

  if (randomNumber === 1) {
    computerChoise = 'rock'
  }
  if (randomNumber === 2) {
    computerChoise = 'paper'
  }
  if (randomNumber === 3) {
    computerChoise = 'scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoise
}


function getResult() {
  if (computerChoise === userChoice) {
    result = 'draw'
  }
  if (computerChoise === 'rock' && userChoice === 'paper') {
    result = 'user wins'
  }
  if (computerChoise === 'paper' && userChoice === 'rock') {
    result = 'computer wins'
  }
  if (computerChoise === 'rock' && userChoice === 'scissors') {
    result = 'computer wins'
  }
  if (computerChoise === 'scissors' && userChoice === 'paper') {
    result = 'computer wins'
  }
  if (computerChoise === 'paper' && userChoice === 'scissors') {
    result = 'user wins'
  }
  if (computerChoise === 'scissors' && userChoice === 'rock') {
    result = 'user wins'
  }
  resultDisplay.innerHTML = result
  
}

