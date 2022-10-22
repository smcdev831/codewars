function sumMix(x) {
  let flats = x.flat();
  let total = 0;
  for (let i = 0; i < flats.length; i++) {
    total += Number(flats[i]);
  }
  return total;
}
