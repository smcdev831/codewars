function remove(string) {
  if (string.endsWith("!")) {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

//refactoring

function remove(string) {
  return string.endsWith("!") ? string.slice(0, -1) : string;
}
