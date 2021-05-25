function largestPalindrome(numDigits) {
  let max = Math.pow(10, numDigits) - 1;
  let innerIndex = 1;
  let largestPalindrome = 0;
  while (innerIndex <= max) {
    for (let i = 0; i < max; i++) {
      let num = innerIndex * i;
      if (
        num.toString() === num.toString().split("").reverse().join("") &&
        num > largestPalindrome
      ) {
        largestPalindrome = num;
      }
    }
    innerIndex++;
  }
  return largestPalindrome;
}

console.log(largestPalindrome(2));
