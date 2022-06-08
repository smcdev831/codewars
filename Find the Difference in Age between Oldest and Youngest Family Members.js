function differenceInAges(ages) {
  let oldest = Math.max(...ages);
  let youngest = Math.min(...ages);
  let difference = oldest - youngest;
  return [youngest, oldest, difference];
}
