// Question 1
let title = 'The Flintstones Rock';
for (let space = 0; space < 10; space++) {
  console.log(title.padStart(space + title.length));
}

// Question 2
let munstersDescription = "The Munsters are creepy and spooky.";
let newDescription = munstersDescription.split("").map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
console.log(newDescription);

// Question 3
function factors(number) {
  let divisor = number;
  let factors = [];
 
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
