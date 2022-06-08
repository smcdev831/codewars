function correctTail(bod, tail) {
  sub = bod.substr(bod.length - tail.length);

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}

//refactoring
function correctTail(bod, tail) {
  return bod.endsWith(tail);
}
