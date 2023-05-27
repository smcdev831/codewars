function typeOfSum(a, b) {
  sum = a + b;
  return typeof sum;
}

//refactoring
function typeOfSum(a, b) {
  return typeof (a + b);
}
