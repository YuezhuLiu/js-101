const isPalindrome = string => {
  let reverseString = '';
  for (let idx = string.length - 1; idx >= 0; idx--) {
    reverseString += string[idx];
  }
  console.log(reverseString);
  return reverseString === string;
};

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true