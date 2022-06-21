const score = document.getElementById('score')
const result = document.getElementById('result')

const choices = {
  rock: {
    wins: ['scissors'],
    loses: ['paper'],
  },
  paper: {
    wins: ['rock'],
    loses: ['scissors'],
  },
  scissors: {
    wins: ['paper'],
    loses: ['rock'],
  }
}

let userScore = 0
let computerScore = 0

function pick(userPick) {
  // Choose random weapon from choices
  const choicesArray = Object.keys(choices)
  const randomChoice = Math.floor(Math.random() * choicesArray.length)
  const computerPick = choicesArray[randomChoice]

  const computer = choices[computerPick]
  if (computer.wins.includes(userPick)) {
    computerScore++
    result.innerText = `Computer picks ${computerPick}. You lose!`
  } else if (computer.loses.includes(userPick)) {
    userScore++
    result.innerText = `Computer picks ${computerPick}. You win!`
  } else {
    result.innerText = `Computer picks ${computerPick}. It's a draw!`
  }
  score.innerText = `${userScore}:${computerScore}`
}
