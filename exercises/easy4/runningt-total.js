const runningTotal = numbers => {
  let totalArray = [];
  let sum = 0;

  for (let idx = 0; idx < numbers.length; idx++) {
    totalArray.push(sum += numbers[idx]);
  }
  return totalArray;
};

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
