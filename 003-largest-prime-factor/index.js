function primeArray(arrayLength) {
  let primes = [];
  let index = 0;
  let highest = 0;

  while (primes.length < arrayLength) {
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

function largestPrimeFactor(num) {
  let primes = primeArray(1000);
  let index = 0;
  return recursiveDivide(num, primes[index]);

  function recursiveDivide(num, prime) {
    if (num === 1) {
      return prime;
    }
    if (num % prime === 0) {
      num = num / prime;
    } else {
      index++;
      prime = primes[index];
    }
    return recursiveDivide(num, prime);
  }
}
console.log(largestPrimeFactor(600851475143));
// console.log(primeArray(100));
