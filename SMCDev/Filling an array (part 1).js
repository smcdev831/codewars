function arr(n) {
  let list = [];
  for (let i = 0; i <= n - 1; i++) {
    list.push(i);
  }
  return list;
}

//refactoring w/arrow function
const arr = (n) => Array.from({ length: n }, (_, i) => i);
