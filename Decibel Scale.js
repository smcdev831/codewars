function dBScale(intensity) {
  return Math.log10(intensity / 10 ** -12) * 10;
}
