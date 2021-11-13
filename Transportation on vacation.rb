def rental_car_cost(d)
  rental = d * 40
  if d = 3..6
    return rental - 30
  elsif d >= 7
    return rental - 50
  else
    return rental
end
