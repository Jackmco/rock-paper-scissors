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

let roundCount = 0
let computerWins = 0
let humanWins = 0
let buttons = document.querySelectorAll("button")
for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
    var humanChoice = buttons.item(i).innerHTML
    var computerChoice = getComputerChoice()
    var roundResult = playRound(humanChoice, computerChoice)
    if (roundCount < 1) { // create a div for the individual round result
            var htmlRoundResult = Object.assign(document.createElement("div"), { id: 'roundResult' })
            document.body.appendChild(htmlRoundResult)
            var htmlComputerWins = Object.assign(document.createElement("div"), { id: 'computerWins' })
            var htmlHumanWins = Object.assign(document.createElement("div"), { id: 'humanWins' })
            document.body.appendChild(htmlRoundResult)
            document.body.appendChild(htmlComputerWins)
            document.body.appendChild(htmlHumanWins)
    }
    if (roundResult === "human") {
            humanWins++
            document.getElementById("roundResult").textContent = "You win! " + humanChoice + " beats " + computerChoice + "."
        } 
        else if (roundResult === "computer") {
            computerWins++
            document.getElementById("roundResult").textContent = "You lose! " + computerChoice + " beats " + humanChoice + "."
        }
        else {
            document.getElementById("roundResult").textContent = "It's a draw! You both picked " + humanChoice + "."
        }
        document.getElementById("computerWins").textContent = "Computer round wins: " + computerWins
        document.getElementById("humanWins").textContent = "Human round wins: " + humanWins
        roundCount++
        console.log(humanWins, computerWins)
    if (humanWins === 5 || computerWins === 5) {
        var gameOver = Object.assign(document.createElement("div"), { id: 'gameOver' })
        document.body.appendChild(gameOver)
        for (let i=0; i < buttons.length; i++) {
            buttons[i].disabled = true
        }
        if (humanWins === 5) {
            document.getElementById("gameOver").textContent = "Congratulations, you win!"
        }
        else if (computerWins === 5) {
            document.getElementById("gameOver").textContent = "Oh no! The computer wins."
        }
    }
        })
    }

// Non-UI Code v---
// function getHumanChoice() {
//     let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase()
//     if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
//        return humanChoice
//     }
//     else {
//         alert("That is not a permitted choice.")
//         getHumanChoice()   
//     }
// }

function playRound(humanChoice, computerChoice) {
    // console.log(humanChoice, computerChoice)
    let result = ""
    humanChoice = humanChoice.toLowerCase()
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

// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         humanChoice = getHumanChoice()
//         computerChoice = getComputerChoice()
//         console.log("Result of Game " + i + ":")
//         result = playRound(humanChoice, computerChoice)
//         if (result === "human") {
//             ++humanScore
//             console.log("You win! " + humanChoice + " beats " + computerChoice + ".")
//         } 
//         else if (result === "computer") {
//             ++computerScore
//             console.log("You lose! " + computerChoice + " beats " + humanChoice + ".")
//         }
//         else {
//             console.log("It's a draw! You both picked " + humanChoice + ".")
//         }
//         console.log("Human games won: " + humanScore)
//         console.log("Computer games won: " + computerScore)
//    }
// }

// playRound()