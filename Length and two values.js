function alternate(n, firstValue, secondValue) {
  values = [];
  for (let i = 0; i < n; i++) {
    if (values[i - 1] != firstValue) {
      values.push(firstValue);
    } else {
      values.push(secondValue);
    }
  }
  return values;
}
