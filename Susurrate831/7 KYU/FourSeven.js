function fourSeven(n) {
  if (n === 4) {
    return 7;
  } else if (n === 7) {
    return 4;
  } else {
    return 0;
  }
}

function fourSeven(n) {
  return n === 7 ? 4 : n === 4 ? 7 : 0;
}

function fourSeven(n) {
  // Your Code Here
  let results = {
    7: 4,
    4: 7,
  };
  return results[n] || 0;
}
