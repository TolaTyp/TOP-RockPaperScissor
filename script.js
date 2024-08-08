console.log("Hello Bud")



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper or scissor");
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === 'rock') {
        humanChoice = 1;
    } else if (humanChoice === 'paper'){
        humanChoice = 2;
    } else if (humanChoice === 'scissor') {
        humanChoice = 3;
    }
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;

// Rock = 1, Paper = 2, Scissor = 3;

function playRound (humanChoice, computerChoice) {
    //user picks rock
    if (humanChoice === 1 && computerChoice === 1) {
        return console.log("Draw! Both of you picked rock.");
    } else if (humanChoice === 1 && computerChoice === 2) {
        return console.log("You lose. Your rock gets wrapped by paper");
    } else if (humanChoice === 1 && computerChoice === 3) {
        return console.log("You win! Your rock smashes the scissor."), win;
    } 
    //user picks paper
    else if (humanChoice === 2 && computerChoice === 1) {
        return console.log("You win! Your paper wraps the rock."), win;
    }else if (humanChoice === 2 && computerChoice === 2) {
        return console.log("Draw! Both of you picked scissor.");
    }else if (humanChoice === 2 && computerChoice === 3) {
        return console.log("You lose! Your paper gets cut by the scissor.");
    }
    //user picks scissor
    else if (humanChoice === 3 && computerChoice === 1) {
        return console.log("You lose! Your scissor gets smashed by the rock.");
    }else if (humanChoice === 3 && computerChoice === 2) {
        return console.log("You win! Your scissor cuts the paper."), win;
    }else if (humanChoice === 3 && computerChoice === 3) {
        return console.log("Draw! Both of you picked the same");
    }
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

const win = getHumanChoice();
const lose = getHumanChoice();

playRound(humanChoice, computerChoice);
