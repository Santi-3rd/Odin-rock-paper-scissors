function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomizer = Math.floor(Math.random() * choices.length);
    return choices[randomizer]
}

function getPlayerChoice(){ //This should listen for button presses 
        let rock = document.querySelector('#rock')
        rock.addEventListener('click', function(event){
            console.log(event.type)
        })
    }

function playRound(){
    

}

function game(){

    let playerScore = 0;
    let computerScore = 0;
}
