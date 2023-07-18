const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const prompt = message => {
  console.log(`=> ${message}`);
};

const displayWinner = (choice, computerChoice) => {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (choice === computerChoice) {
    prompt("It's a tie!");
  } else if ((choice === 'rock' && computerChoice === 'scissors') ||
             (choice === 'paper' && computerChoice === 'rock')    ||
             (choice === 'scissors' && computerChoice === 'paper')) {
    prompt(`You win!`);
  } else {
    prompt('Computer wins!');
  }
};

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
