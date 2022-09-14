var greet = function (name) {
  let lowerName = name.toLowerCase();
  let correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
  return `Hello ${correctName}!`;
};
