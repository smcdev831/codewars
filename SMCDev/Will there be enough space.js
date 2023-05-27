function enough(cap, on, wait) {
  if (cap > on + wait) {
    return 0;
  } else {
    return on + wait - cap;
  }
}

//refactoring

function enough(cap, on, wait) {
  return cap > on + wait ? 0 : on + wait - cap;
}
