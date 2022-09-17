function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}

//refactoring
function checkForFactor(base, factor) {
  return base % factor === 0;
}
