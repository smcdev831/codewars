var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};

//refactoring
var replaceDots = function (str) {
  return str.split(".").join("-");
};
