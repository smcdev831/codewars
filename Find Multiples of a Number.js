function findMultiples(integer, limit) {
  let numbers = [];
  for (let i = integer; i <= limit; i += integer) {
    numbers.push(i);
  }
  return numbers;
}
