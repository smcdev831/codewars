function fakeBin(x) {
  let binary = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= 5) {
      binary += "1";
    } else {
      binary += "0";
    }
  }
  return binary;
}
