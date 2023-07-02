function whoseMove(lastPlayer, win) {
  if (lastPlayer === "white" && win === true) {
    return "white";
  } else if (lastPlayer === "black" && win === false) {
    return "white";
  } else {
    return "black";
  }
}
