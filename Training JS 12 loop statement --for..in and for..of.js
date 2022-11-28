function giveMeFive(obj) {
  let arr = [];
  for (const key in obj) {
    if (key.length >= 5) {
      arr.push(obj[key]);
    }
  }

  for (const value in obj) {
    if (value.length >= 5) {
      arr.push(obj[value]);
    }
  }
  return arr;
}
