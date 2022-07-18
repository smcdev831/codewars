function isDigit(s) {
  if (s === " ") {
    return false;
  } else if (s === "") {
    return false;
  } else if (s > 0 || s <= 0) {
    return true;
  } else {
    return false;
  }
}
