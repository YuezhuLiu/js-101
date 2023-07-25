const isPalindromeNumber = number => {
  let string = String(number.toFixed(0));
  return string === string.split('').reverse().join('');
};

isPalindromeNumber(34543);        // true
isPalindromeNumber(123210);       // false
isPalindromeNumber(22);           // true
isPalindromeNumber(5);            // true