/*
function playRound(roundCount) {
    let humanScore = 0;
    let computerScore = 0;
    for (i = 0; i < roundCount; i++) {
        function getComputerChoice() {
            let randNum = Math.floor(Math.random() * 3);
            if (randNum == 0) {
                return "rock"
            } else if (randNum == 1) {
                return "paper"
            } else if (randNum == 2) {
                return "scissors"
            }
        }

        function getHumanChoice() {
            let personMove = prompt("What is your move?");
            personMove = personMove.toLowerCase();
            return personMove
        }
        let compC = getComputerChoice();
        let humanC = getHumanChoice();

        if (compC == 'rock' && humanC == 'paper' || compC == 'scissors' && humanC == 'rock' || compC == 'paper' && humanC == 'scissors') {
            humanScore++;
            console.log(compC);
            console.log(humanC);
            console.log("Human Wins!");
        } else if (humanC == compC) {
            console.log(compC);
            console.log(humanC);
            console.log("It's a tie!");
        } else {
            computerScore++;
            console.log(compC);
            console.log(humanC);
            console.log("Computer won!");
        }
    }
    if (humanScore > computerScore) {
        console.log("Human win wins");
    } else if (computerScore > humanScore) {
        console.log("computer win wins");
    }
}

//playRound(5);
*/
let personMove = "";
let humanScore = 0;
let computerScore = 0;
function rock() {
    personMove = "rock";
}

function paper() {
    personMove = "paper";
}

function scissors() {
    personMove = "scissors";
}

function gameStart() {
    game();
}


function game() {
    function getComputerChoice() {
        let randNum = Math.floor(Math.random() * 3);
        if (randNum == 0) {
            return "rock"
        } else if (randNum == 1) {
            return "paper"
        } else if (randNum == 2) {
            return "scissors"
        }
    }

    let compC = getComputerChoice();
    let humanC = personMove;

    if (compC == 'rock' && humanC == 'paper' || compC == 'scissors' && humanC == 'rock' || compC == 'paper' && humanC == 'scissors') {
        humanScore++;
        let hMove = document.querySelector("#humanMoveHTML");
        hMove.textContent = humanC;

        let cMove = document.querySelector("#compMoveHTML");
        cMove.textContent = compC;

        let winnerText = document.querySelector("#roundWinner");
        winnerText.textContent = "Human won!";

    } else if (humanC == compC) {
        let hMove = document.querySelector("#humanMoveHTML");
        hMove.textContent = humanC;

        let cMove = document.querySelector("#compMoveHTML");
        cMove.textContent = compC;

        let winnerText = document.querySelector("#roundWinner");
        winnerText.textContent = "It's a tie!";
    } else {
        computerScore++;
        let hMove = document.querySelector("#humanMoveHTML");
        hMove.textContent = humanC;

        let cMove = document.querySelector("#compMoveHTML");
        cMove.textContent = compC;

        let winnerText = document.querySelector("#roundWinner");
        winnerText.textContent = "Computer won!";
    }


    let hScoreCount = document.querySelector("#humanScoreCounter");
    hScoreCount.textContent = "Human Points: " + humanScore;
    let cScoreCount = document.querySelector("#compScoreCounter");
    cScoreCount.textContent = "Computer Points: " + computerScore;

    if (humanScore == 5) {
        let victory = document.createElement("h1");
        victory.textContent = "Human got 5 points!";
        document.body.appendChild(victory); 
        
    }

    if (computerScore == 5) {
        let victory = document.createElement("h1");
        victory.textContent = "Computer got 5 points!";
        document.body.appendChild(victory); 
        return;
    }
}