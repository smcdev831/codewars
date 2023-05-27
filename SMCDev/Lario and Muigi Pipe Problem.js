function pipeFix(numbers) {
  let min = numbers[0];
  let max = numbers[numbers.length - 1];
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}
