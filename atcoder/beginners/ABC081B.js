function Main(req) {
  const arrayReq = req.split("\n");
  var targets = arrayReq[1].split(" ");

  const count = judge(targets, 0);

  console.log(count);
}

function judge(targets, count) {
  var flag = true;
  const newTargets = targets.map(v => {
    if (v % 2 !== 0) {
      flag = false
    }
    return v / 2;
  });

  if (!flag) return count;

  return judge(newTargets, ++count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
