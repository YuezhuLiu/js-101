const penultimate = string => {
  let words = string.split(' ');
  return words[words.length - 2];
};
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/* In this problem we first break our words up and put them into an array.
Anything that isn't whitespace is considered a word,
so we can just use split() to divvy up the words.
Then, we grab the second to last object in our words array
by using wordsArray.length - 2 and return it to the caller.
*/

// Further Exploration
const findMiddle = string => {
  let words = string.split(' ');
  if (words.length % 2 === 1) {
    return words[Math.floor(words.length / 2)];
  }
  return words.slice((words.length / 2) - 1, (words.length / 2) + 1);
};

findMiddle("last word");
findMiddle("everyting here is great!");
findMiddle("test sentence with five words.");
findMiddle('word');
findMiddle('');