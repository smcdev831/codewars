const flip = (d, a) => {
  if (d == "R") a.sort((b, c) => b - c);
  else a.sort((b, c) => c - b);
  return a;
};
