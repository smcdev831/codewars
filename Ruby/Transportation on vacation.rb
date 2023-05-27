def rental_car_cost(d)
  rental = d * 40
  if d < 3
    return rental
  elsif d <= 6
    return rental - 20
  else
    return rental - 50
  end
end
