const negative = number => {
  return number < 0 ? number : 0 - number;
};
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

// use Object.is(number, -0) to find out -0