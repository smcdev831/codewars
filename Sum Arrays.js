function sum(numbers) {
  let total = 0;
  for (let i = 0; i <= numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      total += numbers[i];
    }
  }
  return total;
}
