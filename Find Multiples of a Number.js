function findMultiples(integer, limit) {
  let numbers = [];
  for (let i = integer; i <= limit; i++) {
    if (integer % i === 0) {
        numbers.push(i)
    }
  }
  return numbers;
}
