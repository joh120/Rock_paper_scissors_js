const choices = ["rock", "paper", "scissors"]; 
const playerDisplay = document.getElementById("playerDisplay"); // stores div playerDisplay to the variable playerDisplay
const computerDisplay = document.getElementById("computerDisplay"); // stores div computerDisplay to the variable computerDisplay
const resultDisplay = document.getElementById("resultDisplay"); // stores div resultDisplay to the variable resultDisplay
const playerScoreDisplay = document.getElementById("playerScoreDisplay"); // stores span playerScoreDisplay to the variable playerScoreDisplay
const computerScoreDisplay = document.getElementById("computerScoreDisplay"); // stores span computerScoreDisplay to the variable computerScoreDisplay
let playerScore = 0;
let computerScore = 0;

function gameOn(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // makes the choices of rock,paper,scissors be random for the computer

    let result = ""; // result initialize as a empty string in the beginning and after every game

    if(playerChoice === computerChoice)
      // if a tie the result will say IT'S A TIE!
        {
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice)
        // checks for different cases with result changing with each case
        // E.g we pick rock and computer pick scissors means we win etc ..
        {
            case "rock":
                result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`; 
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result)
    // checks the result after each click and displays win or lose in green or red text
    // As well add score for the games played 
    {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore; // stores the playerScore to our score 
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore; // stores the computerScore to the computer
            break;
    }
}