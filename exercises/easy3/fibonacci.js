const fibonacci = num =>
  (num <= 2n ? 1n : fibonacci(num - 1n) + fibonacci(num - 2n));

const findFibonacciIndexByLength = digit => {
  let fibList = [];
  let count = 1n;
  do {
    fibList.push(fibonacci(count));
    count += 1n;
  } while (String(fibonacci(count)).length < digit);
  return count;
};

findFibonacciIndexByLength(2n);    // 7n
findFibonacciIndexByLength(3n);   // 12n
