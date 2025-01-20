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

playRound(5);