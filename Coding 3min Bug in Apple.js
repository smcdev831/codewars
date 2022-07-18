function sc(apple) {
  let row = apple.findIndex((x) => x.includes("B"));
  let col = apple[row].indexOf("B");
  return [row, col];
}
