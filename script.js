// Add logic for computer choice

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let computerChoice = getRandomArbitrary(1, 4);
    // console.log(choice);

    switch (computerChoice) {
        case 1: return "Rock";
        case 2: return "Paper";
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
        //break not required since we are returning in every case
        case "paper": return "Paper";
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
        let result;

        if (humanChoice === computerChoice) {
            result = "Draw";
            //human wins cases
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            result = "Win"    
            humanScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            result = "Win"    
            humanScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            result = "Win"
            humanScore++;

            //computer wins cases
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            result = "Lose"    
            computerScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            result = "Lose"    
            computerScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            result = "Lose"    
            computerScore++;
        }
        
        if (result === "Draw") {
            console.log(`You ${result}!`);
        } else {
            console.log(`You ${result}! ${humanChoice} beats ${computerChoice}`);
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