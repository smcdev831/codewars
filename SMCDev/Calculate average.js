function find_average(array) {
  let average = array.reduce((a, b) => a + b, 0) / array.length;
  return average || 0;
}

//refactoring
function find_average(array) {
  return array.length === 0
    ? 0
    : array.reduce((a, b) => a + b, 0) / array.length;
}
