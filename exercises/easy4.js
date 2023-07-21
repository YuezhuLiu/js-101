//searching 101
const searching = (array, number6) => {
  console.log(array.includes(number6) ? `The number ${number6} appears in ${array}.` : `The number ${number6} does not appear in ${array}.`);
}

let rlSync = require('readline-sync');
let number1 = rlSync.question('Enter the 1st number: ');
let number2 = rlSync.question('Enter the 2nd number: ');
let number3 = rlSync.question('Enter the 3rd number: ');
let number4 = rlSync.question('Enter the 4th number: ');
let number5 = rlSync.question('Enter the 5th number: ');
let number6 = rlSync.question('Enter the last number: ');
let array = Array(number1, number2, number3, number4, number5);

searching(array, number6);

//palindromic strings
const isPalindrome = string => {
  let reverseString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  console.log(reverseString);
  return reverseString === string;
}
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

//palindromic strings 2
const isRealPalindrome =  string => {
  let trimString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reverseString = ''
  for (let i = trimString.length - 1; i >= 0; i--) {
    reverseString += trimString[i];
  }
  console.log(reverseString);
  return reverseString === trimString;
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

//palindromic numbers
const isPalindromeNumber = number => {
  let string = String(number);
  let reverseString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  console.log(reverseString);
  return reverseString === string;
}

isPalindromeNumber(34543);        // true
isPalindromeNumber(123210);       // false
isPalindromeNumber(22);           // true
isPalindromeNumber(5);            // true