function drawStairs(n) {
  var str = "I";
  for (let i = 1; i < n; i++) {
    str += "\n" + " ".repeat(i) + "I";
  }
  return str;
}
