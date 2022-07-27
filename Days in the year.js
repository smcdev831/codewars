function yearDays(year) {
  if (year % 400 === 0) {
    return `${year} has 366 days`;
  } else if (year % 4 === 0 && year % 100 != 0) {
    return `${year} has 366 days`;
  } else {
    return `${year} has 365 days`;
  }
}

//refactoring
function yearDays(year) {
  let days = year % 4 ? 365 : year % 100 ? 366 : year % 400 ? 365 : 366;
  return `${year} has ${days} days`;
}
