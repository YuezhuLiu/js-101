const shortLongShort = (str1, str2) => {
  return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
};
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

// This function takes two strings as arguments,
// Determines the length of them.
// returns the result of concatenating them in specific order
// Use tenary to do that.