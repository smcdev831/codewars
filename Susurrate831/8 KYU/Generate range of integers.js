function generateRange(min, max, step) {
  let numbers = [];
  for (let i = min; i <= max; i += step) {
    numbers.push(i);
  }
  return numbers;
}
