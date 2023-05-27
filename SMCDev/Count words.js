// Mostly works but not for breakspace characters, seems to need regex
// function countWords(str) {
//   arr = str.split(" ");
//   return arr.filter((word) => word != "").length;
// }

function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}
