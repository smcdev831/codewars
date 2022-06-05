function findDifference(a, b) {
  shape1 = a[0] * a[1] * a[2];
  shape2 = b[0] * b[1] * b[2];
  return shape1 > shape2 ? shape1 - shape2 : shape2 - shape1;
}
