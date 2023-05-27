def round_to_next_5(n)
  n % 5 == 0 ? n : (n/5 + 1) * 5
end
