function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return false;
  } else if (flower1 % 2 != 0 && flower2 % 2 != 0) {
    return false;
  } else {
    return true;
  }
}

//refactoring

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}
