const centurySuffix = (centuryNumber) => {
  let lastTwo = [11, 12, 13];
  if (!lastTwo.includes(centuryNumber % 100)) {
    let lastDigit = centuryNumber % 10;
    switch (lastDigit) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
    }
  }
  return 'th';
};

const century = year => {
  let centuryNumber = String(Math.ceil(year / 100));

  return centuryNumber + centurySuffix(centuryNumber);
};

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"