function divisibleBy(numbers, divisor) {
  let divisible = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      divisible.push(numbers[i]);
    }
  }
  return divisible;
}
