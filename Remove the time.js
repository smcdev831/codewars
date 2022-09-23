function shortenToDate(longDate) {
  let noTime = longDate.split(",");
  return noTime[0].toString();
}
