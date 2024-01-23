
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomizer = Math.floor(Math.random() * choices.length);
    return choices[randomizer]
}

// function getPlayerChoice(){ //This should listen for button presses 
        let playerChoice = ''

        let rock = document.querySelector('#rock')
        rock.onclick = function(){
            playerChoice = 'rock'
            playRound(playerChoice)
        }
        let paper = document.querySelector('#paper')
        paper.onclick = function(){
            playerChoice = 'paper'
            playRound(playerChoice)
        }
        let scissors = document.querySelector('#scissors')
        scissors.onclick = function(){
            playerChoice = 'scissors'
            playRound(playerChoice)
        }

function playRound(playerChoice){

    console.log(playerChoice)
    let computerChoice = getComputerChoice()
    console.log(computerChoice)

    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore += 1
        console.log(playerScore, computerScore)
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        playerScore += 1
        console.log(playerScore, computerScore)
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore += 1
        console.log(playerScore, computerScore)
    }
    else if (playerChoice === computerChoice) {
        console.log("TIED")
    }
    else {
        computerScore += 1
        console.log(playerScore, computerScore)
    }
    
    const playerSc = document.querySelector('#playerScore')
    playerSc.textContent = "Player: " + playerScore

    const playerCh = document.querySelector('#playerChoice')
    playerCh.textContent = playerChoice

    const computerSc = document.querySelector('#computerScore')
    computerSc.textContent = "Computer: " + computerScore

    const computerCh = document.querySelector('#computerChoice')
    computerCh.textContent = computerChoice
    game()

}

function game(){

    scoreContainer = document.querySelector('#scoreContainer')


    if (playerScore == 5) {
        const winner = document.createElement('h1')
        winner.classList.add('winner')
        winner.textContent = "The Player Wins!"
        scoreContainer.appendChild(winner);
        resetGame()

    }
    else if (computerScore == 5){
        const winner = document.createElement('h1')
        winner.classList.add('winner')
        winner.textContent = "The Computer Wins!"
        scoreContainer.appendChild(winner);
        resetGame()
    }
}

function resetGame(){
    scoreContainer = document.querySelector('#scoreContainer')
    const resetButton = document.createElement('button')
    resetButton.textContent = "Reset"
    scoreContainer.appendChild(resetButton)

    resetButton.onclick = function(){
        location.reload()
    }



}
