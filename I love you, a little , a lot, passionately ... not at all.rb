def how_much_i_love_you(nb_petals)
  case nb_petals % 6
  when 1
    return "I love you"
  when 2
    return "a little"
  when 3
    return "a lot"
  when 4
    return "passionately"
  when 5
    return "madly"
  when 0
    return "not at all"
  end
end
