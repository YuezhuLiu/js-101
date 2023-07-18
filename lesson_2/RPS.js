const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SHORT_CHOICES = VALID_CHOICES.map(choice => choice[0]);
const TARGET_SCORE = 3;
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

let playerScore = 0;
let computerScore = 0;

const prompt = message => {
  console.log(`=> ${message}`);
};

const playerWins = (choice, computerChoice) => {
  return WINNING_COMBOS[choice].includes(computerChoice);
};

const displayWinner = (choice, computerChoice) => {
  if (choice === computerChoice) {
    return "It's a tie!";
  } else if (playerWins(choice, computerChoice)) {
    return `You win!`;
  } else {
    return 'Computer wins!';
  }
};

const grandWinner = (playerScore, computerScore) => {
  if (playerScore === TARGET_SCORE) {
    prompt('You are the grand winner!');
  } else if (computerScore === TARGET_SCORE) {
    prompt('Computer is the grand winner!');
  }
};

while (true) {

  console.clear();
  prompt("Welcome to Game of Rock Paper Scissors Lizard Spock！");
  prompt("The first one who wins three times will win the game.");

  while (playerScore < TARGET_SCORE && computerScore < TARGET_SCORE) {

    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    prompt("Input 'r' for rock, 'p' for 'paper', 'sc' for scissors, 'l' for lizard, 's' for spock");
    let shortChoice = readline.question();

    while (!SHORT_CHOICES.includes(shortChoice)) {
      prompt("That's not a valid choice");
      shortChoice = readline.question();
    }

    let choice = '';
    switch (shortChoice) {
      case 'r':
        choice = 'rock';
        break;
      case 'p':
        choice = 'paper';
        break;
      case 'sc':
        choice = 'scissors';
        break;
      case 'l':
        choice = 'lizard';
        break;
      case 's':
        choice = 'spock';
        break;
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);
    prompt(displayWinner(choice, computerChoice));

    if (displayWinner(choice, computerChoice) === 'You win!') {
      playerScore += 1;
    } else if (displayWinner(choice, computerChoice) === 'Computer wins!') {
      computerScore += 1;
    }

    grandWinner(playerScore, computerScore);
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    prompt("See you next time!");
    break;
  }

  playerScore = 0;
  computerScore = 0;
}