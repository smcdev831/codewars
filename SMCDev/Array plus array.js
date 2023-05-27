function arrayPlusArray(arr1, arr2) {
  let summation = 0;
  let newArr = arr1.concat(arr2);
  for (let i = 0; i < newArr.length; i++) {
    summation += newArr[i];
  }
  return summation;
}
