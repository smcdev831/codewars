function multiTable(number) {
  let list = "";
  for (let i = 1; i <= 10; i++) {
    list += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }
  return list;
}
