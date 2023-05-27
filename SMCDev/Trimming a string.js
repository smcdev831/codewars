function trim(str, size) {
  let result = "";
  if (str.length <= size) {
    return str;
  }
  if (size <= 3) {
    for (let i = 0; i < size; i++) {
      result += str[i];
    }
  } else {
    for (let i = 0; i < size - 3; i++) {
      result += str[i];
    }
  }
  return result + "...";
}
