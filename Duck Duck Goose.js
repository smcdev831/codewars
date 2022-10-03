function duckDuckGoose(players, goose) {
  for (let i = 0; i < goose; i++) {
    if (i === (goose - 1) % players.length) {
      return players.name;
    }
  }
}
