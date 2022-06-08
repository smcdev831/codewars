function peopleWithAgeDrink(old) {
  switch (true) {
    case old < 14:
      return "drink toddy";
      break;
    case old < 18:
      return "drink coke";
      break;
    case old < 21:
      return "drink beer";
      break;
    default:
      return "drink whisky";
      break;
  }
}

//refactoring
function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old < 18
    ? "drink coke"
    : old < 21
    ? "drink beer"
    : "whisky";
}
