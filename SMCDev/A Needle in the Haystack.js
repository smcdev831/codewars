function findNeedle(haystack) {
  location = haystack.indexOf("needle");
  return `found the needle at position ${location}`;
}

//refactoring
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}
