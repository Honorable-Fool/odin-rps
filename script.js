function getComputerChoice() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    const randomNum = Math.floor(Math.random() * (maxFloored -minCeiled) + minCeiled);
    if (randomNum == 0){
        return 0;
    }
    else if (randomNum == 1){
        return 1;
    }
    else{
        return 2;
    }
}

function getHumanChoice(){
    const choice = prompt("rock, paper or scissor?: ");
    return choice
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == 1 ) {
        computerScore++;
        return "Human choice: Rock vs Computer choice: Rock, Human Lose, Computer Win!";
    }
    else if (humanChoice == "rock" && computerChoice == 0 ){
        return "Human choice: Rock vs Computer choice: Rock? Draw!";
    }
    else if (humanChoice == "rock" && computerChoice == 2) {
        humanScore++;
        return "Human choice: Rock vs Computer choice: Scissor, Human wins! Computer Lose";
    }
    //HUMAN CHOICE: PAPER
    else if (humanChoice == "paper" && computerChoice == 1 ) {
        return "Human choice: Paper vs Computer choice: Paper? Draw!";
    }
    // computer choice - rock = human win
    else if (humanChoice == "paper" && computerChoice == 0 ){
        humanScore++
        return "Human choice: Paper vs Computer choice: Rock? Human Wins! Computer Lose";
    }
    // computer choice - scissor = human lose
    else if (humanChoice == "paper" && computerChoice == 2) {
        computerScore++;
        return "Human choice: Paper vs Computer choice: Scissor, Human Lose, Computer Wins!";
    }
    else if (humanChoice == "scissor" && computerChoice == 1 ) {
        humanScore++;
        return "Human choice: Scissor vs Computer choice: Paper? Human Wins! Computer Lose";
    }
    else if (humanChoice == "scissor" && computerChoice == 0 ){
        computerScore++
        return "Human choice: Scissor vs Computer choice: Rock? Human Lose, Computer Wins!";
    }
    else if (humanChoice == "scissor" && computerChoice == 2) {
        return "Human choice: Scissor vs Computer choice: Scissor, Draw";
    }
    else {
        return "Invalid input, please restart the program";
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(),getComputerChoice(0,3));
        console.log("Human score: " + humanScore + "\nComputer score:" + computerScore);
    }
    
}
playGame();