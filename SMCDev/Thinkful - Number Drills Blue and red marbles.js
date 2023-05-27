function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  reds = redStart - redPulled;
  blues = blueStart - bluePulled;
  return blues / (reds + blues);
}
