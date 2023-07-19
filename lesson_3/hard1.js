// Question 4
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
isDotSeparatedIpAddress('4.5.5');
isDotSeparatedIpAddress('1.2.3.4.5');
isDotSeparatedIpAddress('10.11.2.5');
isDotSeparatedIpAddress('sa.12.4.5');
isDotSeparatedIpAddress('789.10.11.21');