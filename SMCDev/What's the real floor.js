function getRealFloor(n) {
  if(n < 1) {
    return n;
  } else if (n >= 1 && n <= 13) {
    return (n-1);
  } else {
    return (n-2)
  }
}
