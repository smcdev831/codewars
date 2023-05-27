function nameShuffler(str) {
  let words = str.split(" ");
  let firstName = words[0];
  let lastName = words[1];
  return `${lastName} ${firstName}`;
}

//refactoring

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
