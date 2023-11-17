function Main(req) {
  const [_, h] = req.trim().split("\n");
  const heights = h.split(" ").map(Number);

  let pre = 0;
  let tmp = 0
  let total = 0;

  heights.forEach(v => {
    if (v >= pre) {
      pre = v;
    } else {
      total += pre - tmp;
      tmp = v;
      pre = v;
    }
  });
  total += pre - tmp;
  console.log(total);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
