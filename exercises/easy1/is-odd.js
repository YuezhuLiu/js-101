const isOdd = integer => Math.abs(integer) % 2 === 1;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/* This program takes one integer argument, which
   may be positive, negative or zero.
   This function returns true if the number's absolute value
   is odd. We call `Math.abs()` function and pass the number
   as the argument, to convert it to a positive value. Then
   we check whether dividing that number by 2 results in a
   remainder 1 or not. And then return truthy or falsy.
*/
