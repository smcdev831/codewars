function aspectRatio(x, y) {
  x = Math.ceil(y * (16 / 9));
  resolution = [x, y];
  return resolution;
}
