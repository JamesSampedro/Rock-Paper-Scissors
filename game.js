function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * 3)];
    return randomChoice;
}

console.log(getComputerChoice());
console.log("test");