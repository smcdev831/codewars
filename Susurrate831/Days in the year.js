function yearDays(year) {
  return year % 4 === 0 ? `${year} has 366 days` : `${year} has 365 days`;
}
