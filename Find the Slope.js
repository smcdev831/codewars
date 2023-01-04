function slope(points) {
  let rise = points[2] - points[0];
  let run = points[3] - points[1];
  if (rise == 0) {
    return "undefined";
  } else {
    return run / rise + "";
  }
}
