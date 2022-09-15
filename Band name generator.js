function bandNameGenerator(str) {
  if (str[0].toUpperCase() === str[str.length - 1].toUpperCase()) {
    return str + str.slice[1];
  } else {
    return `The ${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
  }
}
