function sumArray(array) {
  let total = 0;
  if (array == null || array.length <= 2) {
    return 0;
  } else {
    let newArray = array.sort((a, b) => a - b);
    for (let i = 1; i < newArray.length - 1; i++) {
      total += newArray[i];
    }
    return total;
  }
}
