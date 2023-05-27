def calculate_age(year_of_birth, current_year)
  if year_of_birth > current_year
    age = year_of_birth - current_year
    if age == 1
      return "You will be born in #{age} year."
    else
      return "You will be born in #{age} years."
    end
  elsif year_of_birth < current_year
      age = current_year - year_of_birth
      if age == 1
        return "You are #{age} year old."
      else
        return "You are #{age} years old."
      end
  else
    return "You were born this very year!"
  end
end
