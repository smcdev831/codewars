function calculateAge(birthYear, year) {
  if (birthYear === year) {
    return "You were born this very year!";
  } else if (birthYear === year - 1) {
    return "You are 1 year old.";
  } else if (birthYear === year + 1) {
    return "You will be born in 1 year.";
  } else if (birthYear > year) {
    return `You will be born in ${birthYear - year} years.`;
  } else {
    return `You are ${year - birthYear} years old.`;
  }
}
