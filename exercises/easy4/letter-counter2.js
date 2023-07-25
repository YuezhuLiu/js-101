const wordSizes = sentence => {
  let words = sentence.split(' ');
  let sizes = words.map(word => word.replace(/[^a-z]/gi, '').length);

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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}