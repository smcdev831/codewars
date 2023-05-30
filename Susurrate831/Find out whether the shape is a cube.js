var cubeChecker = function (volume, side) {
  return side * side * side === volume && side * side * side > 0;
};
