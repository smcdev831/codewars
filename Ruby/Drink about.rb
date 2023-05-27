def people_with_age_drink(old)
  case
  when old < 14
    return "drink toddy"
  when old < 18
    return "drink coke"
  when old < 21
    return "drink beer"
  when old >= 21
    return "drink whisky"
  end
end
