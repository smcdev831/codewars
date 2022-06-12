function stairsIn20(s) {
  var year = [].concat(...s);
  var days = [].concat(...year);
  return days.reduce((a, b) => a + b) * 20;
}
