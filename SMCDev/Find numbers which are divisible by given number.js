function divisibleBy(numbers, divisor) {
  let numberList = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      numberList.push(numbers[i]);
    }
  }
  return numberList;
}
