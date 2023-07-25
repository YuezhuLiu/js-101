const stringToInteger = (string, radix = 10) => {
  let number = 0;
  const DIGITS = {
    0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9,
    a : 10, b : 11, c : 12, d : 13, e : 14, f : 15
  };
  for (let idx = 0; idx < string.length; idx++) {
    number +=
    DIGITS[string.toLowerCase()[idx]] * (radix ** (string.length - idx - 1));
  }
  return number;
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger('4D9f', 16));