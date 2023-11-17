function Main(req) {
  const s = req.split(" ");
  const [a, b] = req.split('\n').map(v=>parseInt(v))
  const c = (a * b) % 2;
  if (c) res = "Odd";
  else res = "Even";
  console.log(res);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
