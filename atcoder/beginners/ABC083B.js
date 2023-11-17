function Main(req) {
  const [N, A, B] = req.trim().split(" ").map(v => parseInt(v));

  let total = 0;
  for (let i = A; i <= N; i++) {
    let result = i.toString().split("").reduce((sum, v) => (Number(sum) + Number(v)), 0)
    if (A <= result && result <= B) total += i;
  }
  console.log(total);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
