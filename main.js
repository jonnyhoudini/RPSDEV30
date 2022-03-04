function getUserChoice(userInput) {
    const user = userInput.toLowerCase();
    if (user === 'rock' || user === 'paper' || user === 'scissors') {
        return user;
    } else {
        console.log('You seem to have made an error.')
    }
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3); 
    if (number === 0) {
        return 'rock';
    } else if (number === 1) {
        return 'scissors';
    } else if (number === 2) {
        return 'paper'
    } else {
        return 'error';
    }
    }

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'This game is a tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer has won';
        }
    } 
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'The user has won';
        } else if (computerChoice === 'scissors') {
            return 'The computer has won';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer has won';
        } else if (computerChoice === 'paper') {
            return 'The user has won';
        }
    }
}

function playGame(userInput) {
    let userChoice = getUserChoice(userInput);
    console.log(userChoice)
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
}