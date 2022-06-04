const reverseSeq = (n) => {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers.reverse();
};

//refactoring
const reverseSeq = (n) => {
  let numbers = [];
  for (let i = n; i >= 1; i--) {
    numbers.push(i);
  }
  return numbers;
};
