const triangle = height => {
  let row = 1;
  while (row <= height) {
    console.log(' '.repeat(height - row) + '*'.repeat(row));
    row += 1;
  }
};

triangle(5);
triangle(9);