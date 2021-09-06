def get_grade(s1, s2, s3)
  # Code here
  grades = ((s1 + s2 + s3)/3).floor
  if grades < 60
    return "F"
  elsif grades < 70
    return "D"
  elsif grades < 80
    return "C"
  elsif grades < 90
    return "B"
  else
    return "A"
  end
end
