function tenGreenBottles(n) {
  // Your code here
  const numbers = ["Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"].slice(-n)
  const song = numbers.slice(0, -1).map((x, i) => `${x} green bottles hanging on the wall,\n`.repeat(2) + `And if one green bottle should accidentally fall,\nThere'll be ${numbers[i + 1].toLowerCase()} green bottles hanging on the wall.\n`).join("\n")
  return song.replace("one green bottles", "one green bottle") + (n == 1 ? '' : "\n") + "One green bottle hanging on the wall,\n"+
    "One green bottle hanging on the wall,\n"+
    "If that one green bottle should accidentally fall,\n"+
    "There'll be no green bottles hanging on the wall.\n"
}
