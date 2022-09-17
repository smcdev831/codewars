function squareOrSquareRoot(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 === 0) {
      newArray.push(Math.sqrt(array[i]));
    } else {
      newArray.push(array[i] * array[i]);
    }
  }
  return newArray;
}
