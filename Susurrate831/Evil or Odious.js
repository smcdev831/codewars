function evil(n) {
  let binary = n.toString(2);
  let sum = 0;
  for (let i = 0; i < binary.length; i++) {
    sum += Number(binary[i]);
  }
  return sum % 2 === 0 ? "It's Evil!" : "It's Odious!";
}
