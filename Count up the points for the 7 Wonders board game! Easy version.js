function solve(compasses, gears, tablets) {
  let sum = Math.min(compasses, gears, tablets) * 7;
  let squared = compasses * compasses + gears * gears + tablets * tablets;

  return sum + squared;
}
