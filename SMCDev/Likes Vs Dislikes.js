function likeOrDislike(buttons) {
  let status = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === status) {
      status = "Nothing";
    } else {
      status = buttons[i];
    }
  }
  return status;
}
