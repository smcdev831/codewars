function well(x) {
  //loop through array and count goods
  //push goods count to a variable
  //if goods > 0 && < 3, publish
  //if goods >= 3, series
  //if good === 0, fail
  let goods = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") goods += 1;
  }
  if (goods > 0 && goods < 3) {
    return "Publish!";
  } else if (goods >= 3) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }
}

//refactoring
function well(x) {
  let goods = x.filter((x) => x === "good").length;
  switch (goods) {
    case 0:
      return "Fail!";
      break;
    case 1:
      return "Publish!";
      break;
    case 2:
      return "Publish!";
      break;
    default:
      return "I smell a series!";
      break;
  }
}

//refactor8ing
function well(x) {
  let goods = x.filter((x) => x === "good").length;
  return goods == 0 ? "Fail!" : goods < 3 ? "Publish!" : "I smell a series!";
}
