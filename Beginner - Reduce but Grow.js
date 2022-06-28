function grow(x) {
  let total = x[0];
  for (let i = 1; i < x.length; i++) {
    total *= x[i];
  }
  return total;
}
