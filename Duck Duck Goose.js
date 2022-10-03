function duckDuckGoose(players, goose) {
  for (let i = 0; i < goose; i++) {
    if (i === (goose - 1) % players.length) {
      return players.name;
    }
  }
}

//refactoring
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}
