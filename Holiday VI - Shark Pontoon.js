function shark(pontoonDistance, sharkDistance, yourSpeed, sharkSpeed, dolphin) {
  sharkTime = sharkDistance / sharkSpeed;
  yourTime = pontoonDistance / yourSpeed;

  if (dolphin === true) {
    if (yourTime < sharkDistance / (sharkSpeed * 0.5)) {
      return "Alive!";
    } else {
      return "Shark Bait!";
    }
  } else if (yourTime < sharkTime) {
    return "Alive!";
  } else {
    return "Shark Bait!";
  }
}
