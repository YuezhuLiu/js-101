const twice = number => {
  const string = String(number);
  const length = string.length;
  if (length % 2 === 0 &&
     string.slice(0, length / 2) === string.slice(-length / 2)) {
    return number;
  } else {
    return number * 2;
  }
};

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676