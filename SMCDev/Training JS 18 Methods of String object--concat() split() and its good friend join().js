function splitAndMerge(string, separator) {
  let words = string.split(" ");
  let sorted = [];
  for (let i = 0; i < words.length; i++) {
    sorted.push(words[i].split("").join(separator));
  }
  return sorted.join(" ");
}
