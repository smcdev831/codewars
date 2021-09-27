def define_suit(card)
  case card
  when card[1] = S
    return "Spades"
  when card[1] = C
    return "Clubs"
  when card[1] = D
    return "Diamonds"
  when card[1] = H
    return "Hearts"
  end
end
