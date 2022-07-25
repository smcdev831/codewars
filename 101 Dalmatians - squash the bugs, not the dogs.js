function howManyDalmatians(number) {
  let dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  if (number === 101) {
    return dogs[3];
  } else if (number <= 10) {
    return dogs[0];
  } else if (number <= 50) {
    return dogs[1];
  } else {
    return dogs[2];
  }
}

//refactoring

function howManyDalmatians(number) {
  if (number === 101) {
    return "101 DALMATIANS!!!";
  } else if (number <= 10) {
    return "Hardly any";
  } else if (number <= 50) {
    return "More than a handful!";
  } else {
    return "Woah that's a lot of dogs!";
  }
}
