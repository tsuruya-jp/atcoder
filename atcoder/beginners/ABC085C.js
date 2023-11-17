function Main(req) {
  const [X, Y] = req.trim().split(" ").map(v => parseInt(v))
  let large = -1;
  let midium = -1;
  let small = -1;

  for (let i = 0; i * 10000 <= Y; i++) {
    for (let j = 0; i * 10000 + j * 5000 <= Y; j++) {
      let diff = (Y - (i * 10000 + j * 5000));
      if (diff % 1000 === 0 && diff / 1000 === X - i - j) {
        large = i;
        midium = j;
        small = diff / 1000;
        break;
      }
    }
    if (large !== -1 || midium !== -1 || small !== -1) break;
  }
  console.log(`${large} ${midium} ${small}`)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

