function past(h, m, s) {
  minutes = h * 60;
  seconds = (minutes + m) * 60;
  milliseconds = (seconds + s) * 1000;
  return milliseconds;
}

//refactoring
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
