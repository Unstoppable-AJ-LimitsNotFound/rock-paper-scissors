// Add logic for computer choice

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let computerChoice = getRandomArbitrary(1, 4);
    // console.log(choice);

    switch (computerChoice) {
        case 1: return "Rock";
            break;
        case 2: return "Paper";
            break;
        case 3: return "Scissors";
    }
}

// let ans1 = getComputerChoice();
// console.log(ans1);


// Add logic for human choice

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?");
    humanChoice = humanChoice.toLowerCase();
    // console.log(humanChoice)
    switch (humanChoice) {
        case "rock": return "Rock";
            break;
        case "paper": return "Paper";
            break;
        case "scissors": return "Scissors";
    }
}
// let ans2 = getHumanChoice();
// console.log(ans2);


//Write the logic to play the entire game

function playGame() {

    //Declare the players score variables

    let humanScore = 0;
    let computerScore = 0;

    //Write the logic to play a single round

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Draw!")
            //human wins cases
        } else if (humanChoice === "Rock" && computerChoice.toLowerCase() === "scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if (humanChoice === "Paper" && computerChoice.toLowerCase() === "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if (humanChoice === "Scissors" && computerChoice.toLowerCase() === "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;

            //computer wins cases
        } else if (humanChoice === "Rock" && computerChoice.toLowerCase() === "paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if (humanChoice === "Paper" && computerChoice.toLowerCase() === "scissors") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if (humanChoice === "Scissors" && computerChoice.toLowerCase() === "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        
        console.log(`Human Score: ${humanScore}; Computer Score: ${computerScore}`);
    }

    
    
    //Playing game
    for (let i = 0; i < 5; i++) {
        //PLaying Round
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You WIN!!!")
    } else if (computerScore > humanScore) {
        console.log("You LOSE!!! Better luck next next time...")
    } else {
        console.log("Draw!!!");
    }

}



//Play
playGame();