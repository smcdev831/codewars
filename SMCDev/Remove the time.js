function shortenToDate(longDate) {
  let noTime = longDate.split(",");
  return noTime[0].toString();
}

//refactoring
function shortenToDate(longDate) {
  return longDate.split(",")[0];
}
