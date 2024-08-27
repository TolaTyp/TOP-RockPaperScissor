const buttons = document.querySelectorAll("button");
const logic = document.querySelector("#logic");
const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");
const restartButton = document.querySelector("#restartButton");

restartButton.style.display = "none";

buttons.forEach((button)=>
    button.addEventListener("click", () => {
        playGame(button.id);
    })
);

let computerScore = 0;
let humanScore = 0;

restartButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    buttons.forEach((button) =>
        button.style.display ="initial")
    restartButton.style.display = "none";
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    logic.textContent = "";
});

function getComputerChoice() {
    const choice = Math.round(Math.random() * 2);
    if (choice === 0) {
        console.log("Computer chooses: " + choice);
        return "rock";
    }
    if (choice === 1) {
        console.log("Computer chooses: " + choice);
        return "paper";
    }
    if (choice === 2) {
        console.log("Computer chooses: " + choice);
        return "scissor";
    }
};

function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper or scissor");
    humanChoice = humanChoice.toLowerCase();
    console.log("You choose: " + humanChoice);
    return humanChoice;
}


function playRound (humanChoice, computerChoice) {
    //user picks rock
    let outputText = "";
    if (humanChoice === computerChoice) {
        outputText = ("Draw! Both of you picked "+humanChoice+".");
    }
    if (humanChoice === "rock" && computerChoice === "paper"){
        outputText = ("You lose. Your rock gets wrapped by paper.");
        computerScore++;
    }
    if (humanChoice === "rock" && computerChoice === "scissor"){
        outputText = ("You win! Your rock smashes the scissor.");
        humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "scissor"){
        outputText = ("You lose! Your paper gets cut by the scissor.");
        computerScore++;
    }
    if (humanChoice ==="paper" && computerChoice === "rock") {
        outputText = ("You win! Your paper wraps the rock.");
        humanScore++;
    }
    if (humanChoice === "scissor" && computerChoice === "rock"){
        outputText = ("You lose! Your scissor gets smashed by the rock.");
        computerScore++;
    }
    if (humanChoice ==="scissor" && computerChoice === "paper") {
        outputText = ("You win! Your scissor cuts the paper.");
        humanScore++;
    }

    logic.setAttribute('style', 'white-space: pre;');
    logic.textContent = "Computer picks: " +computerChoice + "\r\n" + outputText + "\r\n";
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;

    if (humanScore >=5 || computerScore >= 5) {
        buttons.forEach((button) => button.style.display = "none");

        if (humanScore === 5){
            logic.textContent += "GG! You win the game!\r\n";
        }
        if (computerScore === 5){
            logic.textContent += "You lose the game. Better luck next time!\r\n"
        }

        restartButton.style.display = "initial";
    }
}

function playGame(btnId) {
    const humanSelect = btnId;
    const computerSelect = getComputerChoice();
    playRound(humanSelect, computerSelect); 
}




/*
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
    
        i++;
        console.log("--- Round "+i);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("--- Scoreboard --- You: "+humanScore+" --- Computer: "+computerScore);
    
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
*/