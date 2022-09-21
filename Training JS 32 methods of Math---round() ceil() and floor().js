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
