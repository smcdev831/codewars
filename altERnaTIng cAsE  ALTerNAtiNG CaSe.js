String.prototype.toAlternatingCase = function () {
  let letters = string.split();
  let alternates = [];
  for (let i = 0; i < array.length; i++) {
    if (words[i] === words[i].toUpperCase()) {
      words[i].toLowerCase();
      alternates.push(words[i]);
    } else {
      words[i].toUpperCase();
      alternates.push(words[i]);
    }
  }
};
