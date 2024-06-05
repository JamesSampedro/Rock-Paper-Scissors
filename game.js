function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * 3)];
    console.log(randomChoice);
    return randomChoice;
}

getComputerChoice();


function getHumanChoice () {
    let humanChoice = prompt("rock, paper or scissors?\nChoice: ").toLowerCase();
    if (humanChoice === "rock") {
        console.log("You played rock.");

    } else if (humanChoice === "paper") {
        console.log("You played paper.");

    } else if (humanChoice === "scisssors") {
        console.log("You played scissors.");

    }else {
        console.log("Error. You didn't pick between the three choices.");
    }
    return humanChoice;
}
getHumanChoice();

console.log("test");