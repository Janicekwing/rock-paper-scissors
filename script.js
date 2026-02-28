let computerScore = 0;
let humanScore = 0;

const roundResults = document.createElement("div");

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

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore += 1;
            roundResults.textContent = "You lost! Paper beats rock";
            return;
        }
        else if (computerChoice == "scissors") {
            humanScore += 1;
            roundResults.textContent = "You won! Rock beats scissors";
            return;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore += 1;
            roundResults.textContent = "You lost! Scissors beat paper";
            return;
        }
        else if (computerChoice == "rock") {
            humanScore += 1;
            roundResults.textContent = "You won! Paper beats rock";
            return;
        }
    }
    else if (humanChoice == "scissors"){ 
        if (computerChoice == "rock") {
            humanScore += 1;
            roundResults.textContent = "You won! Scissors beat rock";
            return;
        }
        else if (computerChoice == "paper") {
            computerScore += 1;
            roundResults.textContent = "You lost! Paper beats scissors";
            return;
        } 
    }
    roundResults.textContent = "Tie!";

}

let computerSelection = getComputerChoice();

function checkWinner(){
    if (computerScore == 5) {
        roundResults.textContent = "Computer wins";
    }
    else if (humanScore == 5) {
        roundResults.textContent = "You win!";
    }
}

function playGame() {
    const gameDiv = document.querySelector(".game");
    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorsButton = document.createElement("button");

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    const scoreboard = document.createElement("div");

    gameDiv.appendChild(rockButton);
    gameDiv.appendChild(paperButton);
    gameDiv.appendChild(scissorsButton);
    gameDiv.appendChild(scoreboard);
    gameDiv.appendChild(roundResults);

    rockButton.classList.add("rock");
    paperButton.classList.add("paper");
    scissorsButton.classList.add("scissors");

    gameDiv.addEventListener("click", (event) => {
        if (event.target.closest.matches(".rock")) {
            playRound("rock", getComputerChoice());
        }
    
        else if (event.target.closest.matches(".paper")) {
            playRound("paper", getComputerChoice()); 
        }
    
        else if (event.target.closest.matches(".scissors")) {
            playRound("scissors", getComputerChoice());
        }
        scoreboard.textContent = "Player: " + humanScore + "\nComputer: " + computerScore;
            checkWinner();  
    });


    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        scoreboard.textContent = "Player: " + humanScore + "\nComputer: " + computerScore;
        checkWinner(); 
    });
    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        scoreboard.textContent = "Player: " + humanScore + "\nComputer: " + computerScore;
        checkWinner(); 
    });
    scissorsButton.addEventListener("click", () => { 
        playRound("scissors", getComputerChoice());
        scoreboard.textContent = "Player: " + humanScore + "\nComputer: " + computerScore; 
        checkWinner();
    });

    
}



playGame();
