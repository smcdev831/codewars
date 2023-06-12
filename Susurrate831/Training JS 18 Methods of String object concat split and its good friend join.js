function splitAndMerge(string, separator) {
  let words = string.split(" ");
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    arr.push(words[i].split("").join(separator));
  }
  return arr.join(" ");
}
