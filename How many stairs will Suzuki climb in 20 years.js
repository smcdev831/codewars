function stairsIn20(s) {
  var year = [].concat(...s);
  var days = [].concat(...year);
  return days.reduce((a, b) => a + b) * 20;
}

//refactoring

function stairsIn20(s) {
  let days = 0;
  for (let i = 0; i < s.length; i++) {
    days += s[i].reduce((a, b) => a + b);
  }
  return 20 * days;
}
