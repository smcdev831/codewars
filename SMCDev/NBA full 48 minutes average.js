function pointsPer48(ppg, mpg) {
  totalTime = 48 / mpg;
  return ppg === 0 ? 0 : +(ppg * totalTime).toFixed(1);
}
