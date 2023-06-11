function invert(array) {
  let inverted = [];
  for (let i = 0; i < array.length; i++) {
    inverted.push(array[i] * -1);
  }
  return inverted;
}
