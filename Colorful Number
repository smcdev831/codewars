def colorful? number
  arr = []
  prod_arr = []
  array = number.to_s.chars
  length = 0
  until length == array.length
    array.each_index do |i|
      arr.push(array[i..i+length]) unless i+length >= array.length
    end
    length += 1
  end
  arr.each do |nums|
    prod_arr.push(nums.map{ |n| n.to_i }.reduce(:*))
  end
  prod_arr == prod_arr.uniq
end
