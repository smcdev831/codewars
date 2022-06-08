function differenceInAges(ages) {
  let ageRange = [];
  let oldest = Math.max(ages);
  let youngest = Math.min(ages);
  let difference = oldest - youngest;
  return ageRange.push(youngest, oldest, difference);
}
