function Main(req) {
  const row = req.split("\n");
  const s = row[1].split(" ");
  const a = Number(row[0]);
  const b = Number(s[0]);
  const c = Number(s[1]);
  const text = row[2];

  const res = `${(a + b + c).toString()} ${text}`;
  console.log(res);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
