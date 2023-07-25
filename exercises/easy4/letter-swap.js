const swap = sentence => {
  let words = sentence.split(' ');
  let swapWords = [];

  words.forEach(word => {
    let lastIndex = word.length - 1;
    if (lastIndex) {
      let swapWord = word[lastIndex] + word.slice(1, lastIndex) + word[0];
      swapWords.push(swapWord);
    } else {
      swapWords.push(word);
    }
  });
  return swapWords.join(' ');
};

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"