function evenFibonacci(max) {
  let sum = 0;
  let previous = 1;
  let current = 2;
  while (current < max) {
    let newCurrent = previous + current;
    if (current % 2 === 0) sum += current;
    previous = current;
    current = newCurrent;
  }

  return sum;
}

console.log(evenFibonacci(4000000));
