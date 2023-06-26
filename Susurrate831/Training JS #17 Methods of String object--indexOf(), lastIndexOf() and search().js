function firstToLast(str, c) {
  let first = str.indexOf(c);
  let last = str.lastIndexOf(c);
  let length = last - first;

  return str.includes(c) ? length : str.indexOf(c);
}
