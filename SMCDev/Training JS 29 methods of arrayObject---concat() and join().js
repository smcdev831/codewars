function bigToSmall(arr) {
  newArr = []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
  return newArr;
}
