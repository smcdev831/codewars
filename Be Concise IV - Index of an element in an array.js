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

function find(array, element) {
  let val = array.indexOf(element);
  return val === -1 ? "Not found" : array.indexOf(element);
}

function find(a, e) {
  let val = a.indexOf(e);
  return val === -1 ? "Not found" : a.indexOf(e);
}
