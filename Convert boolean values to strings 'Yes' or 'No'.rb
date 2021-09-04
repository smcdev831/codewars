def bool_to_word bool
  bool.to_s
  if bool == false
    return "No"
  else
    return "Yes"
  end
end
