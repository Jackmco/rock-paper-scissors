let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomNum = Math.trunc(Math.random()*100+1)
    if (randomNum > 0 && randomNum <= 33) {
        return "rock"
    }
    else if (randomNum >= 34 && randomNum <= 66) {
        return "paper"
    }
    else if (randomNum >= 67 && randomNum <= 100)
        return "scissors"
    return
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase()
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
       return humanChoice
    }
    else {
        alert("That is not a permitted choice.")
        getHumanChoice()   
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice)
    let result
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            result = "tie"        
        }
        else if (computerChoice === "paper") {
            result = "computer"
        }
        else if (computerChoice === "scissors") {
            result = "human"
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            result = "human"        
        }
        else if (computerChoice === "paper") {
            result = "tie"
        }
        else if (computerChoice === "scissors") {
            result = "computer"
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "computer"        
        }
        else if (computerChoice === "paper") {
            result = "human"
        }
        else if (computerChoice === "scissors") {
            result = "tie"
        }
    }
    return result
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        console.log("Result of Game " + i + ":")
        result = playRound(humanChoice, computerChoice)
        if (result === "human") {
            ++humanScore
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".")
        } 
        else if (result === "computer") {
            ++computerScore
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".")
        }
        else {
            console.log("It's a draw! You both picked " + humanChoice + ".")
        }
        console.log("Human games won: " + humanScore)
        console.log("Computer games won: " + computerScore)
   }
}

playGame()