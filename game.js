function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
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

function playGame() {
    let humanScore = 0,
        computerScore = 0;

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
        
        for (let i = 0; i < 5; i++){
            playRound(getHumanChoice(), getComputerChoice());
        }

        if (humanScore > computerScore) {
            console.log("Your score: " + humanScore + "\nComputer Score: " + computerScore);
            console.log("You Win!");
        }
        else if (humanScore === computerScore) {
            console.log("Your score: " + humanScore + "\nComputer Score: " + computerScore);
            console.log("Its a draw.");
        }
        else {
            console.log("Your score: " + humanScore + "\nComputer Score: " + computerScore);
            console.log("You lose.");
        }
}

playGame();