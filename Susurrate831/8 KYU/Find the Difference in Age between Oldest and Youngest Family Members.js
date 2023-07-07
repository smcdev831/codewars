function differenceInAges(ages) {
  let sorted = ages.sort((a, b) => a - b);
  return [
    sorted[0],
    sorted[sorted.length - 1],
    sorted[sorted.length - 1] - sorted[0],
  ];
}
