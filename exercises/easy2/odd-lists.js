const oddities = array => {
  let oddArray = [];
  for (let idx = 0; idx < array.length; idx += 2) {
    oddArray.push(array[idx]);
  }
  return oddArray;
};
//further exploration
const evenitie = array => {
  return array.filter(number => array.indexOf(number) % 2 === 1);
};

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evenitie([2, 3, 4, 5, 6]));
console.log(evenitie([1, 2, 3, 4, 5, 6]));