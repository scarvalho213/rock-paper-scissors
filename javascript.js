let playerWinCount = 0;
let computerWinCount = 0;

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

function playRound(playerSelection, computerSelection) {
    let playerWin = "You win!";
    let computerWin = "You lost!";
    let tied = "It's a draw";
    if (playerSelection == computerSelection) {
        return tied;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerWinCount++;
        return computerWin;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerWinCount++;
        return playerWin;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerWinCount++;
        return computerWin;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerWinCount++;
        return playerWin;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerWinCount++;
        return computerWin;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerWinCount++;
        return playerWin;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = capitalize(prompt("Choose rock, paper or scissors:"));
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerWinCount > computerWinCount) {
        console.log("Congratulations, you won the game!");
    }
    else if (computerWinCount > playerWinCount) {
        console.log("Sorry, you lost the game!");
    }
    else {
        console.log("It was a tie");
    }
    
} 

console.log(game());
