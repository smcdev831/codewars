def duty_free(price, discount, holiday_cost)
  ( holiday_cost / ( price * discount / 100.00 ) ).floor
end
