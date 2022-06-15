function areYouPlayingBanjo(name) {
  if (name.startsWith("R") || name.startsWith("r")) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

//refactoring
function areYouPlayingBanjo(name) {
  return name.startsWith("R") || name.startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
