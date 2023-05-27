#def is_divisible(n,x,y)
#  if n % x === 0 && n % y === 0
#    return true
#  else
#    return false
#  end
#end

def is_divisible(n,x,y)
  (n % x == 0) && (n % y == 0)
end
