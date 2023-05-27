function getNumberFromString(s) {
  return Number(
    s
      .split("")
      .filter((num) => num <= "9" && num >= "0")
      .join("")
  );
}
