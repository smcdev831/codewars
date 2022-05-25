//https://www.codewars.com/kata/5fa6d9e9454977000fb0c1f8/train/javascript

function unpackSausages(truck) {
  let packages = [];
  let num = 0;
  for (let pack = 0; pack < truck.length; pack++) {
    for (let box = 0; box < truck[pack].length; box++) {
      let cur = truck[pack][box][1] || "";
      if (truck[pack][box] == `[${cur.repeat(4)}]`) {
        num++;
        if (num % 5 !== 0) {
          packages = packages.concat(...cur.repeat(4));
        }
      }
    }
  }
  return packages.join(" ");
}
