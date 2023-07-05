function removeEveryOther(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}
