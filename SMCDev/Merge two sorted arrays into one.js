function mergeArrays(arr1, arr2) {
  let merger = arr1.concat(arr2);
  let dedupe = [...new Set(merger)];
  dedupe.sort((a, b) => a - b);
  return dedupe;
}
