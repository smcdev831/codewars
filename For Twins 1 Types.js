function typeValidation(variable, type) {
  return typeof variable == type ? true : false;
}

//refactoring

function typeValidation(variable, type) {
  return typeof variable === type;
}
