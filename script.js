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

//Write the logic to play the entire game

//Declare the players score variables

let humanScore = 0;
let computerScore = 0;

let i = 1;
function playGame() {
    const resultDiv = document.querySelector("div");


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

        let roundNum = document.createElement("p");
        roundNum.textContent = `Round: ${i++}`;


        let roundChoiceHuman = document.createElement("p");
        roundChoiceHuman.textContent = `Your choice: ${humanChoice}`;

        let roundChoiceComputer = document.createElement("p");
        roundChoiceComputer.textContent = `Computer's Choice: ${computerChoice}`;

        let roundResult = document.createElement("p");

        if (result === "Draw") {
            roundResult.textContent = `You ${result}!`;
        } else {
            roundResult.textContent = `You ${result}! ${humanChoice} beats ${computerChoice}`;
        }

        let roundScore = document.createElement("p");
        roundScore.textContent = `Human Score: ${humanScore}; Computer Score: ${computerScore}`;

        const hLine = document.createElement("hr");

        resultDiv.append(roundNum, roundChoiceHuman, roundChoiceComputer, roundResult, roundScore, hLine); //better way
        // resultDiv.appendChild(roundChoices);
        // resultDiv.appendChild(roundResult);
        // resultDiv.appendChild(roundScore);
        // resultDiv.appendChild(hLine);

        if (humanScore === 5 && computerScore < 5) {
            alert("You WIN!!!");
        } else if (computerScore === 5 && humanScore < 5) {
            alert("You LOSE!!! Better luck next next time...");
        }
    }


    const buttons = document.querySelectorAll("button");

    // Playing game

    //PLaying Round
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // console.log(button.textContent);
            playRound(button.textContent, getComputerChoice());
        });
    });
}

//Play
playGame();