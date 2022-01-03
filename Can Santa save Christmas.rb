def determineTime(durations)
  return true if durations.empty?
  total = durations.map do |duration|
    hours, minutes, seconds = duration.split(':').map(&:to_i)
    seconds += minutes * 60
    seconds += hours * 3_600
  end.sum
  total <= 86_400
end
