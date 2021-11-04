def remainder(a, b)
  if a || b == 0
    return nil
  elsif a < b
    return b % a
  else
    return a % b
  end
end
