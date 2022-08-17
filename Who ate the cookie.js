function cookie(x) {
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "float" || typeof x === "number") {
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}

//refactoring
function cookie(x) {
  let type = typeof x;
  let name =
    type === "string" ? "Zach" : type === "number" ? "Monica" : "the dog";
  return `Who ate the last cookie? It was ${name}!`;
}
