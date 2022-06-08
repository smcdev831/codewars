function calculateAge(birthYear, askedYear) {
  switch (true) {
    case birthYear === askedYear:
      return "You were born this very year!";
      break;
    case birthYear < askedYear:
      age = askedYear - birthYear;
      if (age === 1) {
        return `You are ${age} year old.`;
      } else {
        return `You are ${age} years old.`;
      }
      break;
    case birthYear > askedYear:
      age = birthYear - askedYear;
      if (age === 1) {
        return `You will be born in ${age} year.`;
      } else {
        return `You will be born in ${age} years.`;
      }
      break;
    default:
      "Unable to calculate. Check with mom.";
      break;
  }
}

//refactoring
function calculateAge(birthYear, askedYear) {
  age = birthYear - askedYear;
  if (birthYear === askedYear) {
    return "You were born this very year!";
  } else if (birthYear < askedYear && age != 1 && age != -1) {
    return `You are ${age * -1} years old.`;
  } else if (birthYear < askedYear) {
    return `You are ${age * -1} year old.`;
  } else if (birthYear > askedYear && age != 1 && age != -1) {
    return `You will be born in ${age} years.`;
  } else {
    return `You will be born in ${age} year.`;
  }
}
