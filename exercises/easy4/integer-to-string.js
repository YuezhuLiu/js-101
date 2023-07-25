const integerToString = int => {
  let numbers = [];
  let remain = int;

  do {
    let digit = remain % 10;
    numbers.unshift(digit);

    remain = Math.floor(remain / 10);
  } while (remain > 0);

  return numbers.join('');

};

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"