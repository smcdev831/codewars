function addLength(str) {
  let split = str.split(" ");
  let array = [];
  for (let i = 0; i < split.length; i++) {
    array.push(`${split[i]} ${split[i].length}`);
  }
  return array;
}
