function isOdd(n) {
  if (n%2 === 1)
    return true;
  else if (n%0.2 === 0)
    return false;
  else if (-n%2 === 1)
    return true;
  else
    return false;
}
