function isToday(date) {
  let today = new Date();
  return today.toDateString() === date.toDateString() ? true : false;
}
