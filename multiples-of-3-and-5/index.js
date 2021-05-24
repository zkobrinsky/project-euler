function getMultiplesSum(mult1, mult2, max) {
  let sum = 0;
  for (let i = 1; i < max; i++) {
    if (i % mult1 === 0 || i % mult2 === 0) sum += i;
  }
  return sum;
}

console.log(getMultiplesSum(3, 5, 1000));
