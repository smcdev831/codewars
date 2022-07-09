function magNumber(info) {
  if (info[0] === "PT92") {
    return Math.ceil((3 * info[1]) / 17);
  } else if (info[0] === "M4A1") {
    return Math.ceil((3 * info[1]) / 30);
  } else if (info[0] === "M16A2") {
    return Math.ceil((3 * info[1]) / 30);
  } else {
    return Math.ceil((3 * info[1]) / 5);
  }
}
