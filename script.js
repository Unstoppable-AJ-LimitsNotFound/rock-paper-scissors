// Add logic for computer choice

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let computerChoice = getRandomArbitrary(1,4);
    // console.log(choice);

    switch (computerChoice) {
        case 1: return "Rock";
        break;
        case 2: return "Paper";
        break;
        case 3: return "Scissors";
    }
}

let ans1 = getComputerChoice();
console.log(ans1);


// Add logic for human choice

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?");

    switch (humanChoice) {
        case "Rock": return "Rock";
        break;
        case "Paper": return "Paper";
        break;
        case "Scissors": return "Scissors";
    }
}
let ans2 = getHumanChoice();
console.log(ans2);