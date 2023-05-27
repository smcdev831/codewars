class String
  def toJadenCase
    split(" ").map{|word| word.capitalize}.join(" ")
  end
end
