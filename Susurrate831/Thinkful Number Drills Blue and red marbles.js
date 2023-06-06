function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let totalRed = redStart - redPulled;
  let totalBlue = blueStart - bluePulled;
  return totalBlue / (totalRed + totalBlue);
}
