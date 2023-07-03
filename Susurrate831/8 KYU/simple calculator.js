function calculator(a, b, sign) {
  switch (sign) {
    case "+":
      return a + b;
      break;
    case "*":
      return a * b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;

    default:
      return "unknown value";
      break;
  }
}
