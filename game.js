console.log("mes");
let humanScore = 0;
let computerScore = 0;
let gameButtons = document.querySelectorAll('.btn');
    
    gameButtons.forEach(button => {
    button.addEventListener('click' , ( )=> {
        let humanClick = button.id;
        playGround(humanClick, getComputerChoice())
    });
    
    })

function getComputerChoice () {
    let represntNum = Math.random() * 100;
    let computerChoice;
    if(represntNum < 33.33){
        computerChoice = "Scissors";    
    }
    else if(represntNum < 66.66){
        computerChoice = "Rock";    
    }
    else{
        computerChoice = "Paper";    

    }
    return computerChoice;


}
function getHumanChoice(){
let humanChoice = prompt("Choose Paper/Rock/Scissors")
return humanChoice;
}

function playGround(human,computer){
    let humanChoice = human.toLowerCase();
    let computerChoice = computer.toLowerCase();
    let roundResult = document.createElement('li');
    roundResult.textContent  = "Human Choice = " + humanChoice + ", Computer Choice = " + computerChoice;
    let resultsList = document.querySelector('#rounds');
    resultsList.appendChild(roundResult);
    

    if(humanChoice === computerChoice){
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;

        }
        else if(humanChoice === "rock" && computerChoice === "paper"){
            computerScore++;

        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;

        }
        else{
            computerScore++;

        }
        document.getElementById('human-score').textContent = humanScore;
        document.getElementById('computer-score').textContent = computerScore;
        if(humanScore >= 5){
            document.getElementById('winner').textContent = "Human Wins!!!"

        }
        else if(computerScore >= 5){

            document.getElementById('winner').textContent = "Computer Wins!!!"

        }
        



}


function playGame() {
    for (let i = 1; i < 6; i++){
        playGround(getHumanChoice(),getComputerChoice());
       
    }
    if(humanScore > computerScore){
    
        console.log("Human wins the game!!!")

    }
    else if(humanScore < computerScore){
        console.log("Computer wins the game!!!")

    }
    else{

        console.log("Its a tie :(")

    }
}

//playGround(getHumanChoice(),getComputerChoice());
//playGame();


