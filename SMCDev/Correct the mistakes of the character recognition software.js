function correct(string) {
  return string.split("0").join("O").split("1").join("I").split("5").join("S");
}

//refactoring

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
