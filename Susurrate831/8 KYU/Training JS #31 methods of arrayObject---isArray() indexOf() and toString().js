function blackAndWhite(arr) {
  if (Array.isArray(arr)) {
    if (arr.includes(5) && arr.includes(13)) {
      return "It's a black array";
    } else {
      return "It's a white array";
    }
  } else {
    return "It's a fake array";
  }
}
