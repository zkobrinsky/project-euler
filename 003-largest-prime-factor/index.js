function primeArray(arrayLength) {
  let primes = [];
  let index = 0;
  while (primes.length < arrayLength) {
    let highest = 0;
    for (let j = 2; j <= index; j++) {
      if (j === index) {
        if (j > highest) {
          primes.push(index);
          highest = j;
        }
      }
      if (index % j === 0) break;
    }
    index++;
  }

  return primes;
}

console.log(primeArray(100));
