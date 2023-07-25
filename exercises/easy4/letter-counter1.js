const wordSizes = sentence => {
  let words = sentence.split(' ');
  let sizes = words.map(word => word.length);

  let counts = {};

  if (sentence) {
    for (let size of sizes) {
      counts[size] = counts[size] ? counts[size] + 1 : 1;
    }
    return counts;
  } else {
    return counts;
  }

};

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}