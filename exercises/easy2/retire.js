const retire = (age, retireAge) => {
  const date = new Date();
  const year = date.getFullYear();
  console.log(`It's ${year}. You will retire in ${retireAge - age + year}.\nYou have only ${retireAge - age} years of work to go!`);
};

let rlSync = require('readline-sync');
let age = Number(rlSync.question("What is your age? "));
let retireAge = Number(rlSync.question("At what age would you like to retire? "));
retire(age, retireAge);