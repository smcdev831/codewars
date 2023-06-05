function countPositivesSumNegatives(input) {
  let total = 0;
  let count = 0;
  if (input === null || input.length === 0) {
    return [];
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count += 1;
    } else {
      total += input[i];
    }
  }
  return [count, total];
}
