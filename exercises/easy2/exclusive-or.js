const xor = (n1, n2) => {
  return (n1 && !n2) || (!n1 && n2);
};
console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true