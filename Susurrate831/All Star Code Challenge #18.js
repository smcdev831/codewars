function strCount(str, letter) {
  if (str.includes(letter)) {
    return str.split(letter).length - 1;
  } else {
    return 0;
  }
}
