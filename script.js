// define global variables for wins, losses, and ties
let wins = 0;
let losses = 0;
let ties = 0;

// attach click event listeners to buttons
document.getElementById('rock').addEventListener('click', playRound);
document.getElementById('paper').addEventListener('click', playRound);
document.getElementById('scissors').addEventListener('click', playRound);

// function to handle game logic
function playRound(event) {
// get user's choice from button clicked
const userChoice = event.target.id;

// generate random choice for computer
const randomNumber = Math.floor(Math.random() * 3);
let computerChoice;
if (randomNumber === 0) {
    computerChoice = 'rock';
} else if (randomNumber === 1) {
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}

// compare user's choice to computer's choice and determine winner
if (userChoice === computerChoice) {
    ties++;
    document.getElementById('ties').textContent = ties;
    document.getElementById('result').innerHTML = "It's a tie!";
} else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
) {
    wins++;
    document.getElementById('wins').textContent = wins;
    document.getElementById('result').innerHTML = "You win!";
} else {
    losses++;
    document.getElementById('losses').textContent = losses;
    document.getElementById('result').innerHTML = "Computer wins!";
}
}
