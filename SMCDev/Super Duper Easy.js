function problem(x) {
  if (typeof x === "string") {
    return "Error";
  } else {
    return x * 50 + 6;
  }
}

//refactoring
function problem(x) {
  return typeof x === "string" ? "Error" : x * 50 + 6;
}
