let rlSync = require('readline-sync');
let name = rlSync.question("What is your name? ");

const greeting = name => {
  console.log(name.endsWith('!') ? `Hello ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?` : `Hello ${name}.`);
};


greeting(name);
// We begin by requiring `readline-sync`
//and then asking for and obtaining user's name
//Then I use tenary operator to log specific string to console
//If the last character of the name is an exclamation mark,
//we remove that exclamation mark from the name by using slice()
//and then log the SHOUTING version of the greeting.
//Otherwise, we just log a normal greeting.