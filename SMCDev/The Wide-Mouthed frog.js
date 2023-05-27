function mouthSize(animal) {
  if (animal.toUpperCase() === "ALLIGATOR") {
    return "small";
  } else {
    return "wide";
  }
}

//refactoring
function mouthSize(animal) {
  return animal.toUpperCase() === "ALLIGATOR" ? "small" : "wide";
}
