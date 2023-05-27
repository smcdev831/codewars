def check_exam(arr1,arr2)
 score = 0
  arr2.each_with_index do |answer, index|
    if answer === arr1[index]
      score += 4
    elsif answer === ''
      score += 0
    else
      score -= 1
    end
  end
  score > 0 ? score : 0
end
