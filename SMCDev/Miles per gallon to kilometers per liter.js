function converter(mpg) {
  let imperial = 1.609344 / 4.54609188;
  return Number((mpg * imperial).toFixed(2));
}
