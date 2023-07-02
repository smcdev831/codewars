var countSheep = function (num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    if (num === 0) {
      return "";
    } else {
      string += `${i} sheep...`;
    }
  }
  return string;
};
