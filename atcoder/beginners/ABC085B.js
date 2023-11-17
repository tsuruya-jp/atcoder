function Main(req) {
  const reqArray = req.trim().split("\n").map(v => parseInt(v))
  reqArray.shift();
  const set = new Set(reqArray);
  console.log(set.size);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
