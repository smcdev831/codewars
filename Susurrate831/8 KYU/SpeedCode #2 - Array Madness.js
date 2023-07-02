function arrayMadness(aa, bb) {
  let squares = aa.reduce((a, b) => a + b ** 2, 0);
  let cubes = bb.reduce((a, b) => a + b ** 3, 0);
  return squares > cubes;
}
