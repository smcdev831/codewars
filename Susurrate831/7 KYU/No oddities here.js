function noOdds(values) {
  function isEven(number) {
    return number % 2 == 0;
  }

  return values.filter(isEven);
}
