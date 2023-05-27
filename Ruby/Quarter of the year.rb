def quarter_of(month)
  case month
  when (1..3)
    return 1
  when (4..6)
    return 2
  when (7..9)
    return 3
  when (10..12)
    return 4
  end
end
