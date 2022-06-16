function elevator(left, right, call) {
  if (call <= left && left < right) {
    return "left";
  } else if (call >= left && left > right) {
    return "left";
  } else {
    return "right";
  }
}
