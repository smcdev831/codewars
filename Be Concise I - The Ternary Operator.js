function describeAge(age) {
  if (age <= 12) {
    return "You're a(n) kid";
  } else if (age >= 13 && age <= 17) {
    return "You're a(n) teenager";
  } else if (age >= 18 && age <= 64) {
    return "You're a(n) adult";
  } else {
    return "You're a(n) elderly";
  }
}

function describeAge(age) {
  return age <= 12
    ? "You're a(n) kid"
    : age >= 13 && age <= 17
    ? "You're a(n) teenager"
    : age >= 18 && age <= 64
    ? "You're a(n) adult"
    : "You're a(n) elderly";
}

function describeAge(a) {
  return a <= 12
    ? "You're a(n) kid"
    : a >= 13 && a <= 17
    ? "You're a(n) teenager"
    : a >= 18 && a <= 64
    ? "You're a(n) adult"
    : "You're a(n) elderly";
}

function describeAge(a) {
  return a < 13
    ? "You're a(n) kid"
    : a < 18
    ? "You're a(n) teenager"
    : a < 65
    ? "You're a(n) adult"
    : "You're a(n) elderly";
}
