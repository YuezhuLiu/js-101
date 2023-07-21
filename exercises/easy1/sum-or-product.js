let rlSync = require('readline-sync');

let integer = parseInt(rlSync.question("Please enter an integer greater than 0: "), 10);
let method = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

const computeSum = number => {
  let total = 0;

  for (let counter = 0; counter <= number; counter++) {
    total += counter;
  }
  return total;
};

const computeProduct = number => {
  let total = 1;

  for (let counter = 1; counter <= number; counter++) {
    total *= counter;
  }
  return total;
};

switch (method) {
  case 's':
    console.log(`The sum of the integers between 1 and ${integer} is ${computeSum(integer)}.`);
    break;
  case 'p':
    console.log(`The product of the integers between 1 and ${integer} is ${computeProduct(integer)}.`);
    break;
  default:
    console.log(`Please choose a valid method.`);
    break;
}

// const computeArraySum = array => {
//   let sum = array.reduce((acc, curr) => acc + curr);
//   return sum;
// };

// const computeArrayProduct = array => {
//   let product = array.reduce((acc, curr) => acc * curr);
// };
