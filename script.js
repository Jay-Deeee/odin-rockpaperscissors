let computerScore = 0;
let humanScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    if(choice === 0) {
        choice = "rock"
        console.log('Computer plays: Rock');
    }
    else if (choice === 1) {
        choice = "paper"
        console.log('Computer plays: Paper');
    }
    else if(choice === 2) {
        choice = "scissors"
        console.log('Computer plays: Scissors');
    }
    return choice;
}

function getHumanChoice() {
    let choice = window.prompt("Rock, Paper, or Scissors?")
    return choice;
}
