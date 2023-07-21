let readline = require('readline-sync');

let bill = parseFloat(readline.question('What is the bill? '));
let tipPercent = parseFloat(readline.question('What is the tip percentage? '));

let tip = bill * tipPercent / 100;
let total = (bill + tip).toFixed(2);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total}`);
