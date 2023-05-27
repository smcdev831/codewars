function removeEveryOther(arr) {
  for (var i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}
