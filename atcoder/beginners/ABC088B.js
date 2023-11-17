function Main(req) {
  const [_, a] = req.trim().split("\n");
  const cards = a.split(" ").sort((v, w) => (v - w));
  const len = cards.length;
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) alice += Number(cards.pop());
    else bob += Number(cards.pop());
  }
  console.log(alice - bob);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
