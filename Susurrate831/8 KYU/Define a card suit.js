function defineSuit(card) {
  let suit = card.slice(-1);
  switch (suit) {
    case "♣":
      return "clubs";
      break;
    case "♦":
      return "diamonds";
      break;
    case "♥":
      return "hearts";
      break;
    case "♠":
      return "spades";
      break;

    default:
      return "not a valid suit";
      break;
  }
}
