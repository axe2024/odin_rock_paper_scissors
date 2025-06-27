

function getComputerChoice(choice){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice(choice){
    let sign = prompt("Rock, Paper, or Scissors? (spelling matters)");
    if (sign.toLowerCase() === "rock") {
        return "rock";
    } else if (sign.toLowerCase() === "paper") {
        return "paper";
    } else if (sign.toLowerCase() === "scissors") {
        return "scissors"
    }
}


function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i=0; i <5; i++) {

    function playround(humanChoice, computerChoice) {
        if (humanSelection === "rock", computerSelection === "rock") {
            return "Tie";
        }
        else if (humanSelection === "rock", computerSelection === "paper") {
            return "You Lose";
        }
        else if (humanSelection === "rock", computerSelection === "scissors") {
            return "You Win!";
        }

        if (humanSelection === "paper", computerSelection === "paper") {
            return "Tie";
        }
        else if (humanSelection === "paper", computerSelection === "scissors") {
            return "You Lose";
        }
        else if (humanSelection === "paper", computerSelection === "rock") {
            return "You Win!";
        }
   
        if (humanSelection === "scissors", computerSelection === "scissors") {
            return "Tie";
        }
        else if (humanSelection === "scissors", computerSelection === "rock") {
            return "You Lose";
        }
        else if (humanSelection === "scissors", computerSelection === "paper") {
            return "You Win!";
        }

    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playround(humanSelection, computerSelection);

    console.log(playround())

    function scorecard() {
        if (playround() === "You Win!") {
            humanScore++;
        }
        else if (playround() === "You Lose") {
            computerScore++;
        }
    }

    scorecard();

    console.log("Human Score: " + humanScore)
    console.log("PC Score: " + computerScore)
    }

}

playGame();