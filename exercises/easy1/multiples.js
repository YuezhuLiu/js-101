const multisum = number => {
  let sum = 0;
  for (let num = 1; num <= number; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  return sum;
};

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

// function multisum adds each value in the range to sum variable
// if the value is a multiple of 3 or 5