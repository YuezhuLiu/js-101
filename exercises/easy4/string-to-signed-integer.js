const stringToSignedInteger = (string, radix = 10) => {
  let withoutSign = string.replace(/\D/, '');
  let number = 0;
  const DIGITS = {
    0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9,
    a : 10, b : 11, c : 12, d : 13, e : 14, f : 15
  };
  for (let idx = 0; idx < withoutSign.length; idx++) {
    number +=
    DIGITS[withoutSign.toLowerCase()[idx]] *
    (radix ** (withoutSign.length - idx - 1));
  }

  if (string.startsWith('-')) {
    number = -number;
  }

  return number;
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true