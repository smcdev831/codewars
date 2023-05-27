def wallpaper(l, w, h)
  words = %w{zero one two three four five six seven eight nine
            ten eleven twelve thirteen fourteen fifteen
            sixteen seventeen eighteen nineteen twenty}
  return words[0] if [l,w,h].any? {|n| n.zero? }
  words[((h * l + h * w) / 2.2608695652).ceil]
end
