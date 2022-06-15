function aspectRatio(x, y) {
  x = Math.ceil(y * (16 / 9));
  resolution = [x, y];
  return resolution;
}

//refactoring
function aspectRatio(x, y) {
  return [Math.ceil(y * (16 / 9)), y];
}
