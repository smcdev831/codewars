function sumMul(n, m) {
  let sum = 0;
  if (n < m) {
    for (let i = n; i < m; i += n) {
      sum += i;
    }
  } else {
    return "INVALID";
  }
  return sum;
}
