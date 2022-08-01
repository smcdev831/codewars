function oddOrEven(n) {
  if (n === 1 || n % 2 === 1) {
    return "Either";
  } else if ((n / 2) % 2 === 1) {
    return "Odd";
  } else {
    return "Even";
  }
}
