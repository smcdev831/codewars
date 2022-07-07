function bloodAlcoholContent(drinks, weight, sex, time) {
  if (sex === "female") {
    return (drinks * 5.14) / (weight * 0.66) - 0.015 * time;
  } else {
    return (drinks * 5.14) / (weight * 0.73) - 0.015 * time;
  }
}
