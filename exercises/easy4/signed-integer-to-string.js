const signedIntegerToString = int => {
  let numbers = [];
  let remain = Math.abs(int);
  let sign = Math.sign(int);

  do {
    let digit = remain % 10;
    numbers.unshift(digit);

    remain = Math.floor(remain / 10);
  } while (remain > 0);

  numbers =  numbers.join('');

  if (sign === -1 || Object.is(sign, -0)) {
    numbers = "-" + numbers;
  } else if (sign === +1) {
    numbers = '+' + numbers;
  }

  return numbers;

};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");