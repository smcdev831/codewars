function stairsIn20(s) {
  for (var i = 0, sum = 0; i < s.length; i++) {
    for (var j = 0; j < s[i].length; j++) {
      sum += s[i][j];
    }
  }
  return sum * 20;
}
