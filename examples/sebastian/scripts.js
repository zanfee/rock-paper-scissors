// Get elements from DOM
const score = document.getElementById('score')
const result = document.getElementById('result')

const choices = ['rock', 'paper', 'scissors']

// Keep track of scores
let userScore = 0
let computerScore = 0

function pick(userPick) {
  // Choose random weapon from choices
  const randomChoice = Math.floor(Math.random() * choices.length)
  const computerPick = choices[randomChoice]

  // Check who won and update the DOM
  if (userPick === computerPick) {
    result.innerText = `Computer picks ${computerPick}. It's a draw!`
  }
  else if (userPick === 'rock' && computerPick === 'scissors') {
    userScore++
    result.innerText = `Computer picks ${computerPick}. You win!`
  }
  else if (userPick === 'paper' && computerPick === 'rock') {
    userScore++
    result.innerText = `Computer picks ${computerPick}. You win!`
  }
  else if (userPick === 'scissors' && computerPick === 'paper') {
    userScore++
    result.innerText = `Computer picks ${computerPick}. You win!`
  }
  else if (userPick === 'rock' && computerPick === 'paper') {
    computerScore++
    result.innerText = `Computer picks ${computerPick}. You lose!`
  }
  else if (userPick === 'paper' && computerPick === 'scissors') {
    computerScore++
    result.innerText = `Computer picks ${computerPick}. You lose!`
  }
  else if (userPick === 'scissors' && computerPick === 'rock') {
    computerScore++
    result.innerText = `Computer picks ${computerPick}. You lose!`
  }
  score.innerText = `${userScore}:${computerScore}`
}