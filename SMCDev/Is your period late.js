function periodIsLate(last, today, cycleLength) {
  return cycleLength * (24 * 60 * 60 * 1000) < today - last;
}
