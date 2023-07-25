const searching = (array, number6) => {
  console.log(array.includes(number6) ? `The number ${number6} appears in ${array}.` : `The number ${number6} does not appear in ${array}.`);
};

let rlSync = require('readline-sync');

let number1 = rlSync.question('Enter the 1st number: ');
let number2 = rlSync.question('Enter the 2nd number: ');
let number3 = rlSync.question('Enter the 3rd number: ');
let number4 = rlSync.question('Enter the 4th number: ');
let number5 = rlSync.question('Enter the 5th number: ');
let number6 = rlSync.question('Enter the last number: ');

let array = Array(number1, number2, number3, number4, number5);

searching(array, number6);
