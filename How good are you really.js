function betterThanAverage(classPoints, yourPoints) {
  const avgClassPoints = classPoints.reduce((a,b) => a + b, 0) / classPoints.length
  if (yourPoints > avgClassPoints) {
    return true
  }else{
    return false
  }
}
