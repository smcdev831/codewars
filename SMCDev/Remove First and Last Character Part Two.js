const array = (arr) => {
  newArr = arr.split(",");
  newArr.pop();
  newArr.shift();
  return newArr.join(" ") === "" ? null : newArr.join(" ");
};
