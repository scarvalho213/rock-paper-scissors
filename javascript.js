function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result == 0) {
        let computerChoice = 'Rock';
        return computerChoice;
    }
    else if (result == 1) {
        let computerChoice = 'Paper';
        return computerChoice;
    }
    else if (result == 2) {
        let computerChoice = 'Scissors';
        return computerChoice;
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const computerSelection = getComputerChoice();
const playerSelection = capitalize(prompt("Choose rock, paper or scissors:"));

console.log(playRound(playerSelection, computerSelection));


function playRound(playerSelection, computerSelection) {
    let playerWin = "You win!";
    let computerWin = "You lost!";
    let tied = "It's a draw";
    if (playerSelection == computerSelection) {
        return tied;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return computerWin;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return playerWin;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return computerWin;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return playerWin;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return computerWin;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return playerWin;
    }
}
