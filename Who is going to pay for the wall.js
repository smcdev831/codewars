function whoIsPaying(name) {
  names = [];
  if (name.length > 2) {
    names.push(name);
    names.push(name.substring(0, 2));
  } else {
    names.push(name.substring(0, 2));
  }
  return names;
}

//refactoring

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.substr(0, 2)] : [name];
}
