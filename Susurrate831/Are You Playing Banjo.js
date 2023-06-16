function areYouPlayingBanjo(name) {
  if (name.startsWith("R") || name.startsWith("r")) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}
