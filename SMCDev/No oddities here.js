function noOdds(values) {
  let evens = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evens.push(values[i]);
    }
  }
  return evens;
}
