function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin === true) {
    sharkSpeed = sharkSpeed / 2;
  }

  return pontoonDistance / youSpeed < sharkDistance / sharkSpeed
    ? "Alive!"
    : "Shark Bait!";
}
