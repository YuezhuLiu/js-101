const greetings = (nameArray, professionObj) => {
  let name = nameArray.join(' ');
  let profession = Object.values(professionObj).join(' ');
  return `Hello, ${name}! Nice to have a ${profession} around!`;
};
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// use string interpolation with template strings to combine everything