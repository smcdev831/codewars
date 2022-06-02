function fakeBin(x) {
  let arr = "";
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) >= 5) {
      arr += 1;
    } else {
      arr += 0;
    }
  }
  return arr;
}

//refactoring

function fakeBin(x) {
  let arr = "";
  for (let i = 0; i < x.length; i++) {
    Number(x[i]) >= 5 ? (arr += 1) : (arr += 0);
  }
  return arr;
}
