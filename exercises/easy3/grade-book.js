const getGrade = (score1, score2, score3) => {
  let average = (score1 + score2 + score3) / 3;
  if (average <= 100 && average >= 90) {
    return 'A';
  } else if (average < 90 && average >= 80) {
    return 'B';
  } else if (average < 80 && average >= 70) {
    return 'C';
  } else if (average < 70 && average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

//function that determines the mean (average) of the three scores passed to it,
//and returns the letter associated with that grade