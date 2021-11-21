def is_vow(a)
  a.each.with_index {|x,y| a[y] = x.chr if 'aeiou'.include? x.chr}
end
