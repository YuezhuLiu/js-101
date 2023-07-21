const madlibs = (noun, verb, adj, adv) => {
  console.log(`Do you ${adv} your ${adj} ${noun} ${adv}? That's hilarious!\n
  The ${adj} ${noun} ${verb}s ${adv} over the lazy ${noun}.\n
  The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`);

};

let rlSync = require('readline-sync');
let noun = rlSync.question("Enter a noun: ");
let verb = rlSync.question("Enter a verb: ");
let adj = rlSync.question("Enter an adjective: ");
let adv = rlSync.question("Enter an adverb: ");

madlibs(noun, verb, adj, adv);