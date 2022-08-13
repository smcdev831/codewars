function find(array, element) {
  return array.includes(element) ? array.indexOf(element) : "Not found";
}

function find(array, element) {
  val = array.indexOf(element);
  if (val === -1) {
    return "Not found";
  } else {
    return val;
  }
}
