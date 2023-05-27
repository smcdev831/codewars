function getSum(a, b) {
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let j = b; j <= a; j++) {
      sum += j;
    }
  }
  return sum;
}
