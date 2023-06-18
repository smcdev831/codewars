function mergeArrays(arr1, arr2) {
  let totalArr = arr1.concat(arr2);
  let dedupe = [...new Set(totalArr)];
  dedupe.sort((a, b) => a - b);
  return dedupe;
}
