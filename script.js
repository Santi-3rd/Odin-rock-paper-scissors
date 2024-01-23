
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomizer = Math.floor(Math.random() * choices.length);
    // let computerChoice = choices[randomizer]
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

    roundWinner = ''
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        roundWinner = 'p'
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        roundWinner = 'p'
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        roundWinner = 'p'
    }
    else {
        roundWinner = 'c'
    }
    
    game(roundWinner)

}

function game(roundWinner){


    if (roundWinner == 'p'){
        playerScore += 1
    }
    else {
        computerScore += 1
    }
    console.log(playerScore, computerScore)
    
}
