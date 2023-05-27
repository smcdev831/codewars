def define_suit(card)
  case
  when card.include?("S") then "spades"
  when card.include?("C") then "clubs"
  when card.include?("D") then "diamonds"
  when card.include?("H") then "hearts"
  end
end
