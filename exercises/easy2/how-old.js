const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (Math.abs(max - min) + 1)) + Math.min(min);
};

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);