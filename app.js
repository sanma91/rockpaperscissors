// create an array that pick up randomly a value

const array = [];

array[0] = "rock";
array[1] = "paper";
array[2] = "scissors";

const random = Math.floor(Math.random() * array.length);

function computerPlay() {
     return array[random]
}

// create a function that plays a single round

function playRound() {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return("tie")
        } else if (computerSelection === "paper") {
            return ("you lose")
        } else return("you win")
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return("you win")
        } else if (computerSelection === "paper") {
            return ("tie")
        } else return("you lose")
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return("you lose")
        } else if (computerSelection === "paper") {
            return ("you win")
        } else return("tie")
    }
    else return("aloha")
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));


