let readline = require('readline-sync');
const SQUARE_METERS_TO_FEET = 10.7639;

console.log("Please choose your input type, meters or feet:");
let inputType = readline.prompt();

console.log("Enter the length of the room:");
let length = parseFloat(readline.prompt());

console.log("Enter the width of the room:");
let width = parseFloat(readline.prompt());

let area = length * width;
let areaConverted = 0;

switch (inputType) {
  case 'meters':
    areaConverted = area * SQUARE_METERS_TO_FEET;
    console.log(
      `The area of the room is ${area.toFixed(2)} square meters (${areaConverted.toFixed(2)} square feet).`
    );
    break;
  case 'feet':
    areaConverted = area / SQUARE_METERS_TO_FEET;
    console.log(
      `The area of the room is ${area.toFixed(2)} square feet (${areaConverted.toFixed(2)} square meters).`
    );
    break;
  default:
    console.log("Please chooose from meters and feet.");
}

/* The program makes use of two `readlineSync.prompt` calls
   to get the length and width respectively, performs the computation,
   and then logs the results to the console.
   he `readlineSync.prompt` method returns a string.
   The `parseFloat` function converts that string to an integer.
   The `Number.prototype.toFixed` method formats a number and returns a string.
   The argument passed to the method call signifies the number of digits
   to appear after the decimal point.
*/