function smash(words) {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
  }
  return sentence.trim();
}
