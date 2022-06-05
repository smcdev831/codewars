const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return l * 2 + w * 2;
  }
};

//refactoring

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : l * 2 + w * 2;
};
