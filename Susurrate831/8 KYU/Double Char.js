const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
