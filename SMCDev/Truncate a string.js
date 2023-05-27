function truncateString(str, num) {
  let result = "";
  if (str.length <= num) {
    return str;
  }
  if (num <= 3) {
    for (let i = 0; i < num; i++) {
      result += str[i];
    }
  } else {
    for (let i = 0; i < num - 3; i++) {
      result += str[i];
    }
  }
  return result + "...";
}
