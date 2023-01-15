function consonantCount(str) {
  return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
}

//Different solution
function consonantCount(str) {
  let arr = [];
  let consonants = "bcdfghjklmnpqrstvwxzy";
  for (let i = 0; i < str.length; i++) {
    if (consonants.includes(str[i].toLowerCase())) {
      arr.push(str[i]);
    }
  }
  return arr.length;
}
