function remove(s) {
  //coding and coding....
  while (s[s.length - 1] === "!") {
    s = s.slice(0, -1);
  }
  return s;
}
