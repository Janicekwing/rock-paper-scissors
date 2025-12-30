let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    userChoice = prompt("Enter rock, paper, or scissors: ");
    return userChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore += 1;
            console.log("You lost! Paper beats rock");
            return;
        }
        else if (computerChoice == "scissors") {
            humanScore += 1;
            console.log("You won! Paper beats scissors");
            return;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore += 1;
            console.log("You lost! Scissors beat paper");
            return;
        }
        else if (computerChoice == "rock") {
            humanScore += 1;
            console.log("You won! Paper beats rock");
            return;
        }
    }
    else { // rock
        if (computerChoice == "scissors") {
            humanScore += 1;
            console.log("You won! Scissors beat rock");
            return;
        }
        else if (computerChoice == "paper") {
            computerScore += 1;
            console.log("You lost! Paper beats rock");
            return;
        } 
    }
    console.log("Tie!");

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
    for (let i = 1; i <= 5; i++){
        
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (computerScore > humanScore) {
        console.log("Computer wins");
    }
    else {
        console.log("You win!");
    }
}

playGame();
