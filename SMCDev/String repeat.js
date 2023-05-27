function repeatStr(n, s) {
  let repeating = "";
  for (let i = 0; i < n; i++) {
    repeating += s;
  }
  return repeating;
}

//refactoring

function repeatStr(n, s) {
  return s.repeat(n);
}
