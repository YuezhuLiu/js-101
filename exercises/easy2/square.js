const multiply = (num1, num2) => num1 * num2;

const square = num => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

const powerToN = (num, power) => {
  let result = num;
  if (power === 0) {
    return 1;
  }

  while (power >= 2) {
    result = multiply(result, num);
    power -= 1;
  }
  return result;
};

powerToN(2, 5);
