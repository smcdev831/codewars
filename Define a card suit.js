function defineSuit(card) {
  if (card.slice(-1) == "♣") {
    return "clubs";
  } else if (card.slice(-1) == "♠") {
    return "spades";
  } else if (card.slice(-1) == "♥") {
    return "hearts";
  } else {
    return "diamonds";
  }
}
