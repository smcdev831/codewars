function warnTheSheep(queue) {
  if (queue[queue.length - 1] == "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    let location = queue.indexOf("wolf");
    return `Oi! Sheep number ${
      queue.length - (location + 1)
    }! You are about to be eaten by a wolf!`;
  }
}
