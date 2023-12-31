const isRealPalindrome =  string => {
  let trimString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return trimString === trimString.split('').reverse().join('');
};

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false