//build a mortgage calculator.
//the loan amount, Annual Percentage Rate (APR) and the loan duration is given
//calculate monthly interest rate and loan duration in months
//formula: m = p * (j / (1 - Math.pow((1 + j), (-n))))
//print the payment amount as a dollar and cents amount

const rlSync = require('readline-sync');
const MESSAGES = require('./mortgage_calculator_message.json');

const prompt = keyword => {
  console.log(`=>${MESSAGES[keyword]}`);
};
const invalidNumber = number => {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
};

prompt('welcome');
let name = rlSync.question().trimStart();
while (name === '') {
  prompt('validName');
  name = rlSync.question();
}
prompt('greeting');
console.log(`=>${name}`);

while (true) {
  prompt('loanAmount');
  let loanAmount = rlSync.question();
  while (invalidNumber(loanAmount)) {
    prompt('validNumber');
    loanAmount = rlSync.question();
  }

  prompt('APR');
  let APR = rlSync.question();
  while (invalidNumber(APR)) {
    prompt('validNumber');
    APR = rlSync.question();
  }
  let monthlyRate = Number(APR / 1200);

  prompt('loanYear');
  let loanYear = rlSync.question();
  while (invalidNumber(loanYear)) {
    prompt ('validNumber');
    loanYear = rlSync.question();
  }

  prompt('loanMonth');
  let loanMonth = rlSync.question();
  while (invalidNumber(loanMonth)) {
    prompt('validNumber');
    loanMonth = rlSync.question();
  }
  let loanDuration = Number(loanYear * 12) + Number(loanMonth);

  if (monthlyRate === 0) {
    const monthlyPayment = (Number(loanAmount) / loanDuration).toFixed(2);
    prompt('result');
    console.log(`=>$${monthlyPayment}`);
  } else {
    const monthlyPayment =
    (loanAmount *
    (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration)))))
      .toFixed(2);
    prompt('result');
    console.log(`=>$${monthlyPayment}`);
  }

  prompt('continue');
  let answer = rlSync.question();
  if (answer[0].toLowerCase() !== 'y') break;
}