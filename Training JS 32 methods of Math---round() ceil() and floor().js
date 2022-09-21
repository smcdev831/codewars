function roundIt(n) {
  let numbers = String(n).split(".");
  if (numbers[0].length < numbers[1].length) {
    return Math.ceil(n);
  } else if (numbers[0].length > numbers[1].length) {
    return Math.floor(n);
  } else {
    return Math.round(n);
  }
}

//refactoring
function roundIt(n) {
  let numbers = String(n).split(".");
  return numbers[0].length < numbers[1].length
    ? Math.ceil(n)
    : numbers[0].length > numbers[1].length
    ? Math.floor(n)
    : Math.round(n);
}
