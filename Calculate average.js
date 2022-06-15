function find_average(array) {
  let average = array.reduce((a, b) => a + b, 0) / array.length;
  return average || 0;
}
