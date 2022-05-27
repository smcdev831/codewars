function howMuchILoveYou(nbPetals) {
  switch ((nbPetals - 1) % 6) {
    case 1:
      return "a little";
      break;
    case 2:
      return "a lot";
      break;
    case 3:
      return "passionately";
      break;
    case 4:
      return "madly";
      break;
    case 5:
      return "not at all";
      break;

    default:
      return "I love you";
      break;
  }
}
