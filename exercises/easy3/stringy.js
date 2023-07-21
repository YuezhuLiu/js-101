const stringy = size => {
  let code = '';
  for (let idx = 1; idx <= size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    code += number;
  }
  return code;
};
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"