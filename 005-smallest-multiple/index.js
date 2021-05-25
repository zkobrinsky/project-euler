function smallestMultiple(rangeMax) {
  let num = false;
  let found = false;
  let i = rangeMax;
  while (!found) {
    num = recurseDivisible(i, rangeMax);
    i += rangeMax;
  }

  function recurseDivisible(num, index) {
    if (index === 1) {
      found = true;
      return num;
    }
    if (num % index !== 0) {
      return null;
    }
    return recurseDivisible(num, index - 1);
  }
  return num;
}

console.log(smallestMultiple(20));
