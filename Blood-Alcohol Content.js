function bloodAlcoholContent(drinks, weight, sex, time) {
  if (sex === "female") {
    bac = (drinks.ounces * drinks.abv * 5.14) / (weight * 0.66) - 0.015 * time;
  } else {
    bac = (drinks.ounces * drinks.abv * 5.14) / (weight * 0.73) - 0.015 * time;
  }
  return bac.toFixed(4);
}
