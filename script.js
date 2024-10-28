let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
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
    if(choice.toLowerCase() == "rock") {
        console.log("You play: Rock")
    } else if(choice.toLowerCase() == "paper") {
        console.log("You play: Paper")
    } else if(choice.toLowerCase() == "scissors") {
        console.log("You play: Scissors")
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("It's a tie!")
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        humanScore++
        console.log("You win! Rock beats scissors.")
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        humanScore++
        console.log("You win! Paper beats rock.")
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        humanScore++
        console.log("You win! Scissors beats paper.")
    } else if (computerChoice.toLowerCase() == "rock" && humanChoice.toLowerCase() == "scissors") {
        computerScore++
        console.log("You lose! Rock beats scissors.")
    } else if (computerChoice.toLowerCase() == "paper" && humanChoice.toLowerCase() == "rock") {
        computerScore++
        console.log("You lose! Paper beats rock.")
    } else if (computerChoice.toLowerCase() == "scissors" && humanChoice.toLowerCase() == "paper") {
        computerScore++
        console.log("You lose! Scissors beats paper.")
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

playGame();