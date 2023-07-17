//Ask the user for the first number
//Ask the user for the second number
//Ask the user for an operation to perform
//Perform the operation on the two numbers
//Print the result to the terminal

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

let number1 = readline.question("What's the first number?\n");

let number2 = readline.question("What's the second number?\n");

let operation = readline.question("What operation would you like to perform?\n1) Add 2) Sbustract 3) Multiply 4) Divide");

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
  default:
    console.log("Please choose a valid operation!");
    break;
}
console.log(`The result is : ${output}`);