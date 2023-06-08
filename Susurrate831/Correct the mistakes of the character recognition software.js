function correct(string) {
  newString = string.split("");
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === "0") {
      newString[i] = "O";
    } else if (newString[i] === "1") {
      newString[i] = "I";
    } else if (newString[i] === "5") {
      newString[i] = "S";
    }
  }
  return newString.join("");
}
