function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

//refactoring

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
