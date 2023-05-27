def find_longest(str)
  spl = str.split(" ")
  longest = 0
  i=0
  while (i < spl.length) do
    if (spl[i].length > longest) then longest = spl[i].length end
    i=i+1
  end
  longest
end
