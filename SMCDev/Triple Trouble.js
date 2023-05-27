function tripleTrouble(one, two, three) {
  let word = "";
  for (let i = 0; i <= one.length; i++) {
    word += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return word;
}
