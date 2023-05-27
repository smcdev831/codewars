function racePodium(blocks) {
  let second = Math.ceil(blocks / 3);
  let first = second + 1;
  let third = blocks - first - second;
  if (blocks === 7) {
    return [2, 4, 1];
  } else {
    return [second, first, third];
  }
}
