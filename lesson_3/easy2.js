// Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.replaceAll('important', 'urgent');

// Question 2
let numbers = [1, 2, 3, 4, 5];
let reverseNumbers = numbers.slice().reverse();
console.log(numbers); 
console.log(reverseNumbers);

let sortedNumbers = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(sortedNumbers);

let reversedArray = [];
numbers.forEach(number => {
  reversedArray.unshift(number);
});
console.log(reversedArray);
console.log(numbers);

// Question 3
let numbers1 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers1.includes(number1));
console.log(numbers1.includes(number2));

// Question 4
let famousWords = "seven years ago...";
let output1 = '';
let output2 = '';

output1 = 'Four score and ' + famousWords;
console.log(output1);
output2 = 'Four score and '.concat(famousWords);
console.log(output2);

// Question 5
let numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(2, 1);
console.log(numbers2);

// Question 6
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones = [].concat(...flintstones);

// Question 7
let flintstones1 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
barney = Object.entries(flintstones1).filter(pair => pair[0] === "Barney").flat();

//Question 8
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers); // => true
Array.isArray(table);   // => false

//Question 9
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

// Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;