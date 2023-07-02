function whoIsPaying(name) {
  let newArr = [];
  if (name.length > 2) {
    newArr.push(name);
    newArr.push(name.slice(0, 2));
  } else {
    newArr.push(name);
  }
  return newArr;
}
