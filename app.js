const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const choices = document.querySelectorAll('button');
const resultDisplay = document.getElementById('result');
let uChoice
// let resultT
let computer

choices.forEach(choice => 
    choice.addEventListener('click', (eachEvent)=> {
        uChoice = eachEvent.target.id
        userChoiceDisplay.innerHTML = uChoice
        computerChoice()
        result()
    })
)

function computerChoice() {
     computer = Math.floor(Math.random() * 3)+1;
    switch (computer) {
        case 0:
            computerChoiceDisplay.innerHTML = 'Rock'
            break;
        case 1:
            computerChoiceDisplay.innerHTML = 'Paper'
            break;
        case 2:
            computerChoiceDisplay.innerHTML = 'Scissors'
            break;
    }
}

function result(){
    if (uChoice === 'Rock' && computer === 1) {
        resultDisplay.innerHTML = 'Draw'
    } else if (uChoice === 'Rock' && computer === 2) {
        resultDisplay.innerHTML = 'You Win'
    } else if (uChoice === 'Rock' && computer === 3) {
        resultDisplay.innerHTML = 'You Lose'
    } else if (uChoice === 'Paper' && computer === 1) {
        resultDisplay.innerHTML = 'You Lose'
    } else if (uChoice === 'Paper' && computer === 2) {
        resultDisplay.innerHTML = 'Draw'
    } else if (uChoice === 'Paper' && computer === 3) {
        resultDisplay.innerHTML = 'You Win'
    } else if (uChoice === 'Scissors' && computer === 1) {
        resultDisplay.innerHTML = 'You Win'
    } else if (uChoice === 'Scissors' && computer === 2) {
        resultDisplay.innerHTML = 'You Lose'
    } else if (uChoice === 'Scissors' && computer === 3) {
        resultDisplay.innerHTML = 'Draw'
    }
}
