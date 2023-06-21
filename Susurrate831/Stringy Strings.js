function stringy(size) {
  let newStr = "";
  for (let i = 1; i <= size; i++) {
    newStr += i % 2;
  }
  return newStr;
}
