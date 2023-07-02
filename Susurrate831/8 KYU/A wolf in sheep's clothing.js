function warnTheSheep(queue) {
  let location = queue.indexOf("wolf");

  if (location === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${
      queue.length - location - 1
    }! You are about to be eaten by a wolf!`;
  }
}
