function multipleOfIndex(array) {
  let multiples = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i == 0) {
      multiples.push(array[i]);
    }
  }
  return multiples;
}

//refactoring
function multipleOfIndex(array) {
  return array.filter((x, y) => x % y == 0);
}
