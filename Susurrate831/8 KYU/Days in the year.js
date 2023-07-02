function yearDays(year) {
  return (!(year % 100) && year % 400) || year % 4
    ? `${year} has 365 days`
    : `${year} has 366 days`;
}
