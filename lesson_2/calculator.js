//Ask the user for the first number
//Ask the user for the second number
//Ask the user for an operation to perform
//Perform the operation on the two numbers
//Print the result to the terminal

const readline = require('readline-sync');
const MESSAGES = require('./calculator_message.json');

const messages = (message, lang = 'en') => {
  return MESSAGES[lang][message];
};

let LANGUAGE = 'en';
const prompt = keyword => {
  let message = messages(keyword, LANGUAGE);
  console.log(`=> ${message}`);
};

const invalidNumber = number => {
  return number.trimStart() === '' || Number.isNaN(Number(number));
};

prompt('language');
LANGUAGE = readline.question();

prompt('welcome');
let name = readline.question().trimStart();
if (name !== '') {
  prompt('greeting');
  console.log(name);
} else {
  prompt('validName');
  name = readline.question();
}

while (true) {
  prompt('firstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('validNumber');
    number1 = readline.question();
  }

  prompt('secondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('validNumber');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('validOperation');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  prompt('result');
  console.log(output);
  prompt('continue');
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}
