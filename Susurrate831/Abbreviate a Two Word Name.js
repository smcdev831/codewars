function abbrevName(name) {
  let splitName = name.toUpperCase().split(" ");
  return `${splitName[0][0]}.${splitName[1][0]}`;
}
