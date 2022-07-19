function multiply(number) {
  let count = Math.abs(number).toString().length;
  return number * Math.pow(5, count);
}
