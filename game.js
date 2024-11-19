console.log("mes");
let humanScore = 0;
let computerScore = 0;
function getComputerChoice () {
    let represntNum = Math.random() * 100;
    let computerChoice;
    if(represntNum <= 33){
        computerChoice = "Scissors";    
    }
    else if(represntNum <=66){
        computerChoice = "Rock";    
    }
    else{
        computerChoice = "Paper";    

    }
    console.log("computer coice function " + computerChoice)
    return computerChoice;


}
function getHumanChoice(){
let humanChoice = prompt("Choose Paper/Rock/Scissors")
return humanChoice;
}

function playGround(human,computer){
    let humanChoice = human.toLowerCase();
    let computerChoice = computer.toLowerCase();
    console.log("human = " + humanChoice)
    console.log("computer = " + computerChoice)
    if(humanChoice === computerChoice){
    console.log("Its a tie");
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human Win");
        humanScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Computer Win");
        computerScore++;
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){
            console.log("Human Win");
            humanScore++;

        }
        else if(humanChoice === "rock" && computerChoice === "paper"){
            console.log("Computer Win");
            computerScore++;

        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){
            console.log("Human Win");
            humanScore++;

        }
        else{
            console.log("Computer Win");
            computerScore++;

        }
        console.log("updates human score is = " + humanScore);
        console.log("updates computer score is = " + computerScore);

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




playGame();


