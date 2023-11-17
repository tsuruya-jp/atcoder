function Main(req) {
  const [large, midium, small, total] = req.trim().split("\n").map(v => parseInt(v));

  let count = 0;
  for (let i = 0; i * 500 <= total && i <= large; i++) {
    for (let j = 0; j * 100 + i * 500 <= total && j <= midium; j++) {
      const diff = (total - (i * 500 + j * 100)) / 50;
      if (diff <= small) count++;
    }
  }
  console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
