const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");

let userChoice;
let computerChoice;
let randomNumber;
let generatedNumber;

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
   

    generatedNumber = generateComputerChoice();
    checkResult(userChoice, generatedNumber);
}))

function generateComputerChoice(){
    randomNumber = Math.floor(Math.random() * possibleChoices.length);
    switch(randomNumber){
        case 0: 
            computerChoice = 0;
            computerChoiceDisplay.innerHTML = "Rock 💎";
            break;
        case 1:
            computerChoice = 1;
            computerChoiceDisplay.innerHTML = "Paper 📜";
            break;
        case 2:
            computerChoice = 2;
            computerChoiceDisplay.innerHTML = "Scissors ✂";
            break;
    }
    return randomNumber;
}

function checkResult(userChoice, generatedNumber) {
    if(userChoice === "Rock 💎" && generatedNumber === 2){
        resultDisplay.innerHTML = "You won!";
        won();
    }
    else if(userChoice === "Rock 💎" && generatedNumber === 0){
        resultDisplay.innerHTML = "Draw!";
    }

    else if(userChoice === "Paper 📜" && generatedNumber == 1){
        resultDisplay.innerHTML = "Draw!";
    }
    else if(userChoice === "Paper 📜" && generatedNumber == 0){
        resultDisplay.innerHTML = "You won!";
        won();
    }

    else if(userChoice === "Scissors ✂" && generatedNumber == 1){
        resultDisplay.innerHTML = "You won!";
        won();
    }
    else if(userChoice === "Scissors ✂" && generatedNumber == 2){
        resultDisplay.innerHTML = "Draw!";

    }
    else{
        resultDisplay.innerHTML = "The computer wins!";
    }
}
