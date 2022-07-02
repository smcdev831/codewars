function whoseMove(lastPlayer, win) {
  if (lastPlayer === "black" && win === true) {
    return "black";
  } else if (lastPlayer === "white" && win === true) {
    return "white";
  } else if (lastPlayer === "black" && win === false) {
    return "white";
  } else {
    return "black";
  }
}

//refactoring
function whoseMove(lastPlayer, win) {
  return win ? lastPlayer : lastPlayer === "white" ? "black" : "white";
}
