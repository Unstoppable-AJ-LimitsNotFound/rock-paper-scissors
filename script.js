function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let choice = getRandomArbitrary(1,4);
    // console.log(choice);

    switch (choice) {
        case 1: return "Rock";
        break;
        case 2: return "Paper";
        break;
        case 3: return "Scissors";
    }
}

let ans = getComputerChoice();
console.log(ans);