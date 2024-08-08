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

function playRound (humanChoice, computerChoice) {
    //user picks rock
    let winner = null;
    if (humanChoice === 1 && computerChoice === 1) {
        console.log("Draw! Both of you picked rock.");
    } else if (humanChoice === 1 && computerChoice === 2) {
        console.log("You lose. Your rock gets wrapped by paper");
        winner = 'computer';
    } else if (humanChoice === 1 && computerChoice === 3) {
        console.log("You win! Your rock smashes the scissor.");
        winner = "human";
    } 
    //user picks paper
    else if (humanChoice === 2 && computerChoice === 1) {
        console.log("You win! Your paper wraps the rock.");
        winner = "human";
    } else if (humanChoice === 2 && computerChoice === 2) {
        console.log("Draw! Both of you picked scissor.");
    } else if (humanChoice === 2 && computerChoice === 3) {
        console.log("You lose! Your paper gets cut by the scissor.");
        winner = 'computer';
    }
    //user picks scissor
    else if (humanChoice === 3 && computerChoice === 1) {
        console.log("You lose! Your scissor gets smashed by the rock.");
        winner = 'computer';
    }else if (humanChoice === 3 && computerChoice === 2) {
        console.log("You win! Your scissor cuts the paper.");
        winner = "human";
    }else if (humanChoice === 3 && computerChoice === 3) {
        console.log("Draw! Both of you picked the same");
    }

    if(winner == "human"){
        humanScore++;
    }
    if(winner == "computer"){
        computerScore++;
    }
}


function playGame() {
    let i=0;
    do {
        i++;
        console.log("--- Round "+i);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("--- Scoreboard --- You: "+humanScore+" --- Computer: "+computerScore);
    } while (i<5);
    if (humanScore > computerScore){
        console.log("GG You win!")
    }
    if (humanScore < computerScore) {
        console.log("You lose. Better luck next time!");
    }
    
    if (humanScore == computerScore) {
        console.log("Draw. Try another round!")
    }
}

playGame();


