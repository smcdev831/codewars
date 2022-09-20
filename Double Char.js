function doubleChar(str) {
  let split = str.split("");
  let word = "";
  for (let i = 0; i < split.length; i++) {
    word += split[i] + split[i];
  }
  return word;
}
