let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * 3)];
    console.log("Computer played:", randomChoice);
    return randomChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?\nChoice: ").toLowerCase();
    if (humanChoice === "rock") {
        console.log("You played: rock");
    } else if (humanChoice === "paper") {
        console.log("You played: paper");
    } else if (humanChoice === "scissors") {
        console.log("You played: scissors");
    }else {
        console.log("Error. You didn't pick between the three choices.");
    }
    return humanChoice;
}
/*
loop function to get scores
if else will give a value of 1 to the winner 
 */

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw. No score counted.");
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose. " + computerChoice + " beats " + humanChoice + "!");
            computerScore++;
        } 
        else {
            console.log("You Win. " + humanChoice + " beats " + computerChoice + "!");
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose. " + computerChoice + " beats " + humanChoice + "!");
            computerScore++;
        }
        else {
            console.log("You Win. " + humanChoice + " beats " + computerChoice + "!");
            humanScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose. " + computerChoice + " beats " + humanChoice + "!");
            computerScore++;
        }
        else {
            console.log("You Win. " + humanChoice + " beats " + computerChoice + "!");
            humanScore++;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);