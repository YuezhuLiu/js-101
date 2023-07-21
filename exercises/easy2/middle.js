const centerOf = string => {
  return string.length % 2 === 0 ?
    string.slice((string.length / 2) - 1, (string.length / 2) + 1) :
    string[Math.floor(string.length / 2)];
};

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');