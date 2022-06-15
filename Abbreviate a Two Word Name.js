function abbrevName(name) {
  fullName = name.split(" ");
  firstName = fullName[0].toUpperCase();
  lastName = fullName[1].toUpperCase();
  return `${firstName.slice(0, 1)}.${lastName.slice(0, 1)}`;
}
