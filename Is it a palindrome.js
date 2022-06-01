function isPalindrome(x) {
  let reversed = x.toLowerCase().split("").reverse().join("");
  return reversed === x.toLowerCase() ? true : false;
}

//refactoring

function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase()
    ? true
    : false;
}
