def elevator(left, right, call)
  case
    when call <= left && left < right ; return "left"
    when call >= left && left > right ; return "left"
  end
  "right"
end
