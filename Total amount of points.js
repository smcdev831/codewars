function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    let score = games[i].split(":");
    if (score[0] > score[1]) {
      totalPoints += 3;
    } else if (score[0] == score[1]) {
      totalPoints += 1;
    } else {
      totalPoints = totalPoints;
    }
  }
  return totalPoints;
}

//refactoring
function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) totalPoints += 3;
    if (games[i][0] == games[i][2]) totalPoints += 1;
  }
  return totalPoints;
}
