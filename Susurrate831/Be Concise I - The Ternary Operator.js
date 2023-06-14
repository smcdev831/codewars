function describeAge(a) {
  age = a < 13 ? "kid" : a < 18 ? "teenager" : a < 65 ? "adult" : "elderly";
  return `You're a(n) ${age}`;
}
