function Main(req) {
  const [_, ...reqArray] = req.trim().split("\n");

  let t, x, y, xy;
  let [tmpt, tmpxy] = [0, 0];
  let judge = "Yes";
  for (v of reqArray) {
    [t, x, y] = v.split(" ").map(Number);
    t = Math.abs(t - tmpt);
    xy = Math.abs((x + y) - tmpxy);
    if (t < xy ||
        (t % 2 === 0 && xy % 2 !== 0) ||
        (t % 2 !== 0 && xy % 2 === 0)) {
      judge = "No";
      break;
    }
    tmpt = t;
    tmpxy = xy;
  }
  console.log(judge);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
